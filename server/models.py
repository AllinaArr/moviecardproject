from flask_sqlalcamy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin

db = SQLAlchemy()

class User_Movie_List(db.Model, SerializerMixin):
    __tablename__ = "user_movie_list"
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(user_account.id))
    movie_id=db.Column(db.Integer, db.ForeignKey(list_movies.id))
    poster_path=db.Column(db.String)
    title = db.Column(db.String)
    list_id=db.Column(db.String)
    
    def __repr__(self):
        return f'<User_Movie_List {self.user_id} {self.movie_id} {self.poster_path} {self.title} {self.list_id}>'
    
    class List_Movies(db.Model, SerializerMixin):
        __tablename__ = "list_movies"
        
        id=db.Column(db.Integer, primary_key=True)
        movie_id=db.Column(db.Integer)
        movie_progress=db.Column(db.String)
        
        def __repr__(self):
            return f'<List_Movies {self.movie_id} {self.movie_progress}>'
    #
    #movie_progress conditions "in list", "currently watching", "watched"
   
class User_Account(db.Model, SerializerMixin):
    __tablename__ = "user_account"
    
    id=db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    email = db.Column(db.String)
    password_hash=db.Column(db.String)
    last_login = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    is_active = db.Column(db.Boolean)
    
    def __repr__(self):
        return f'<User_account {self.username} {self.email} {self.password_hash} {self.last_login} {self.is_active}>'
    
    