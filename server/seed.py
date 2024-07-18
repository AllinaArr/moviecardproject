from app import app
from models import db, User_Account, User_Movie_List, List_Movies

def run():
    User_Account.query.delete()
    User_Movie_List.query.delete()
    List_Movies.query.delete()
    db.session.commit()
    
    # add users
    users = [User_Account(username="alinaRudanets", email="alrud@gmail.com", password_hash="helloWorld")]
    
    db.session.add_all(users)
    db.session.commit()
    
     # add list of movie in progress
    movies_progress = [List_Movies(movie_id=720321, movie_progress="in list")] 
    db.session.add_all(movies_progress)
    db.session.commit()
    
    # add user_movie_list
    movies_in_list = [User_Movie_List(user_id=users[0].id, 
                                      movie_id=720321, poster_path="/wTW2t8ocWDlHns8I7vQxuqkyK58.jpg", title="Breathe", list_id=movies_progress[0].movie_id)]
    db.session.add_all(movies_in_list)
    db.session.commit()
    

    
if __name__ == '__main__':
    with app.app_context():
        print("Starting seed...")
        run()