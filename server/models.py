from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin

db = SQLAlchemy()

class User_Movie_List(db.Model, SerializerMixin):
    __tablename__ = "user_movie_list"
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user_account.id'))
    movie_id = db.Column(db.Integer, )
    poster_path = db.Column(db.String)
    title = db.Column(db.String)
    list_id = db.Column(db.String, db.ForeignKey('list_movies.movie_id'))
    
    movie = db.relationship('List_Movies', back_populates='user_movie')
    
    serialize_rules = ['-movie.user_movie']
    
    def __repr__(self):
        return f'<User_Movie_List {self.user_id} {self.movie_id} {self.poster_path} {self.title} {self.list_id}>'
    
class List_Movies(db.Model, SerializerMixin):
    __tablename__ = "list_movies"
        
    id = db.Column(db.Integer, primary_key=True)
    movie_id = db.Column(db.Integer)
    movie_progress = db.Column(db.String)
    
    user_movie = db.relationship('User_Movie_List', back_populates="movie")
    
    serialize_rules = ['-user_movie.movie']
    
    def __repr__(self):
        return f'<List_Movies {self.movie_id} {self.movie_progress}>'
   
class User_Account(db.Model, SerializerMixin):
    __tablename__ = "user_account"
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    email = db.Column(db.String)
    password_hash = db.Column(db.String)
    
    def __repr__(self):
        return f'<User_Account {self.username} {self.email} {self.password_hash}>'
