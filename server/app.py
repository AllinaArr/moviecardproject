from flask import Flask, jsonify, request, make_response
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_cors import CORS

from models import db, User_Movie_List, User_Account, List_Movies

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

CORS(app, supports_credentials=True)

db.init_app(app)

@app.route('/user_account_movies', methods=['GET'])
def get_movies_from_user_account():
    if request.method == 'GET':
        movies = [movie.to_dict() for movie in User_Movie_List.query.all()]
        return make_response(jsonify(movies), 200)
    
@app.route('/movies_progress/in_list', methods=['GET'])
def get_movie_in_list():
    movie_in_list = List_Movies.query.filter(List_Movies.movie_progress.ilike("in list"))
    results = [movie.to_dict() for movie in movie_in_list]
    return make_response(results, 200)

@app.route('/movies_progress/watching', methods=['GET'])
def get_movie_watching():
    movie_currently_watching = List_Movies.query.filter(List_Movies.movie_progress.ilike("currently watching"))
    results = [movie.to_dict() for movie in movie_currently_watching]
    return make_response(results, 200)

@app.route('/movies_progress/finished', methods=['GET'])
def get_movie_finished():
    movie_finished = List_Movies.query.filter(List_Movies.movie_progress.ilike('finished'))
    results = [movie.to_dict() for movie in movie_finished]
    return make_response(results,200)

@app.route('/user_account_movies/<int:id>', methods=['DELETE'])
def delete_movies_from_user_account(id):
    if request.method =='DELETE':
        movie = User_Movie_List.query.filter(User_Movie_List.id == id).first()
        db.session.delete(movie)
        db.session.commit()
        return make_response(movie.to_dict(), 200)
        


if __name__ == '__main__':
    app.run(port=5555, debug=True)
