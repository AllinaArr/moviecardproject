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


if __name__ == '__main__':
    app.run(port=5555, debug=True)
