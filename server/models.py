from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from flask_bcrypt import Bcrypt
from sqlalchemy.ext.hybrid import hybrid_property

convention = {
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}

db = SQLAlchemy(metadata=MetaData(naming_convention=convention))
bcrypt = Bcrypt()


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
    username = db.Column(db.String, unique=True, nullable=False)
    email = db.Column(db.String)
    __password = db.Column(db.String, nullable=False)
    
    @hybrid_property
    def password(self):
        return self.__password
    
    @password.setter
    def password(self, new_password):
        hash = bcrypt.generate_password_hash(new_password.encode('utf-8'))
        self.__password = hash
        
    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password, password.encode('utf-8'))
    
    serialize_rules = ['-_password']
    
    def __repr__(self):
        return f'<User_Account {self.username} {self.email} {self.password_hash}>'
