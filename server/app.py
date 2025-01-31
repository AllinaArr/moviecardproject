from flask import Flask, jsonify, request, make_response
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_cors import CORS

from models import db, User_Movie_List, User_Account, List_Movies, Review

from werkzeug.security import check_password_hash 
from werkzeug.security import generate_password_hash

import jwt

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'your_secret_key'
app.json.compact = False

migrate = Migrate(app, db)

CORS(app, supports_credentials=True)

db.init_app(app)

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User_Account.query.filter(User_Account.username == data['username']).first()
    if user and check_password_hash(user.password_hash, data['password']):  # Use `password_hash`
        token = jwt.encode({'user_id': user.id}, app.config['SECRET_KEY'], algorithm='HS256')
        return jsonify({"success": True, "token": token})
    return jsonify({"success": False, "message": "Invalid username or password"}), 401

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()

    # Validate input
    if not all(key in data for key in ('email', 'username', 'password')):
        return jsonify({"message": "Missing fields"}), 400

    hashed_password = generate_password_hash(data['password'], method='pbkdf2:sha256')
    
    try:
        new_user = User_Account(
            email=data['email'],
            username=data['username'],
            password_hash=hashed_password  # Use the correct field name
        )
        db.session.add(new_user)
        db.session.commit()
    except IntegrityError:
        db.session.rollback()
        return jsonify({"message": "Email or username already exists"}), 400
    
    return jsonify({"message": "User registered successfully"})

@app.route('/user_account_movies', methods=['GET'])
def get_movies_from_user_account():
    if request.method == 'GET':
        movies = [movie.to_dict() for movie in User_Movie_List.query.all()]
        return make_response(jsonify(movies), 200)
    
@app.route('/movies_progress/in_list', methods=['GET'])
def get_movie_in_list():
    if request.method == 'GET': 
        movie_in_list = List_Movies.query.filter(List_Movies.movie_progress.ilike("in list"))
        results = [movie.to_dict() for movie in movie_in_list]
        return make_response(results, 200)
    
@app.route('/movies_progress/in_list', methods=['POST'])
def post_movie_in_list():
    if request.method == 'POST':
        data = request.get_json()
    
        existing_movie = User_Movie_List.query.filter_by(user_id=data['user_id'], movie_id=data['movie_id']).first()
        
        if existing_movie:
            return {'error':"Movie is already in list"}, 400
            
        try:
            new_movie = User_Movie_List(
                # list_id = data['movie_id'],
                movie_id = data['movie_id'],
                poster_path = data['poster_path'],
                title = data.get('title', None),
                name = data.get('name', None),
                user_id = data['user_id'],
                movie = List_Movies(
                    movie_id= data['movie_id'],
                    movie_progress = "in list"
                )
            )
        except ValueError:
            return {'error':'bad request'}, 400
        
        db.session.add(new_movie)
        db.session.commit()
        
        return make_response(new_movie.to_dict(), 201)
    
@app.route('/movies_progress/update', methods=['PATCH'])
def patch_movie_in_list():
    data = request.get_json()
    
    movie_id = data['movie_id']
    movie_progress = data['movie_progress']
    
    movie_record = List_Movies.query.filter_by(movie_id=movie_id).first()
    if movie_record:
        movie_record.movie_progress= movie_progress
        db.session.commit()
        return make_response(movie_record.to_dict(), 200)
    return {'error': 'Movie not found'}, 404
    
@app.route('/movies_progress/watching', methods=['GET', 'POST'])
def get_movie_watching():
    if request.method == 'GET':
        movie_currently_watching = List_Movies.query.filter(List_Movies.movie_progress.ilike("currently watching"))
        results = [movie.to_dict() for movie in movie_currently_watching]
        return make_response(results, 200)
    
    if request.method == 'POST':
        data = request.get_json()
            
        existing_movie = User_Movie_List.query.filter_by(user_id=data['user_id'], movie_id=data['movie_id']).first()
        
        if existing_movie:
            return {'error':"Movie is already in list"}, 400
        
        try:
            new_movie = User_Movie_List(
                # list_id = data['movie_id'],
                movie_id = data['movie_id'],
                poster_path = data['poster_path'],
                title = data.get('title', None),
                name = data.get('name', None),
                user_id = data['user_id'],
                movie = List_Movies(
                    movie_id= data['movie_id'],
                    movie_progress = "currently watching"
                )
            )
        except ValueError:
            return {'error':'bad request'}, 400
        
        db.session.add(new_movie)
        db.session.commit()
        
        return make_response(new_movie.to_dict(), 201)
        

@app.route('/movies_progress/finished', methods=['GET', 'POST'])
def get_movie_finished():
    if request.method == 'GET':
        movie_finished = List_Movies.query.filter(List_Movies.movie_progress.ilike('finished'))
        results = [movie.to_dict() for movie in movie_finished]
        return make_response(results,200)
    
    if request.method == 'POST':
        data = request.get_json()
            
        existing_movie = User_Movie_List.query.filter_by(user_id=data['user_id'], movie_id=data['movie_id']).first()
        
        if existing_movie:
            return {'error':"Movie is already in list"}, 400
        
        try:
            new_movie = User_Movie_List(
                # list_id = data['movie_id'],
                movie_id = data['movie_id'],
                poster_path = data['poster_path'],
                title = data.get('title', None),
                name = data.get('name', None),
                user_id = data['user_id'],
                movie = List_Movies(
                    movie_id= data['movie_id'],
                    movie_progress = "finished"
                )
            )
        except ValueError:
            return {'error':'bad request'}, 400
        
        db.session.add(new_movie)
        db.session.commit()
        
        return make_response(new_movie.to_dict(), 201)

@app.route('/user_account_movies/<int:id>', methods=['DELETE'])
def delete_movies_from_user_account(id):
    if request.method =='DELETE':
        movie_id = User_Movie_List.query.filter(User_Movie_List.id == id).first()
        
        if movie_id:
            progress_status = ["in list", "currently watching", "finished"]
            
            for status in progress_status:
                movie_progress = List_Movies.query.filter_by(id=id, movie_progress=status).first()
                if movie_progress:
                    db.session.delete(movie_progress)
        
        db.session.delete(movie_id)
        db.session.commit()
                
        return make_response(movie_id.to_dict(), 200)
    
@app.route('/user_account_movies/reviews', methods=['GET','POST'])
def post_movie_review():
    if request.method == 'GET':
        reviews = Review.query.all()
        return [review.to_dict(rules=['-user_movie', '-movie.user_movie']) for review in reviews], 200
    if request.method == 'POST':
        data = request.get_json()
        try:
            new_review = Review(
                user_id = data['user_id'],
                movie_id = data['movie_id'],
                movie_progress = data['movie_progress'],
                review_score = data['review_score'],
                review = data['review'],
            )
        except ValueError:
            return {'error':'no review added'}, 400
        db.session.add(new_review)
        db.session.commit()
        
        return new_review.to_dict(), 201
        

if __name__ == '__main__':
    app.run(port=5555, debug=True)
