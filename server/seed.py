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
    movies_progress = [List_Movies(movie_id=720321, movie_progress="in list"),
                       List_Movies(movie_id=1022789, movie_progress="currently watching"),
                       List_Movies(movie_id=519182, movie_progress="finished")] 


    
    db.session.add_all(movies_progress)
    db.session.commit()
    
    # add user_movie_list
    movies_in_list = [User_Movie_List(user_id=users[0].id, 
                                      movie_id=720321, poster_path="/wTW2t8ocWDlHns8I7vQxuqkyK58.jpg", title="Breathe", name="", list_id=movies_progress[0].movie_id),
                      User_Movie_List(user_id=users[0].id, 
                                      movie_id=1022789, poster_path="/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg", title="Inside Out 2",name="", list_id=movies_progress[1].movie_id),
                      User_Movie_List(user_id=users[0].id, 
                                      movie_id=519182, poster_path="/3w84hCFJATpiCO5g8hpdWVPBbmq.jpg", title="Despicable Me 4", name="", list_id=movies_progress[2].movie_id)]
    db.session.add_all(movies_in_list)
    db.session.commit()
    

    
if __name__ == '__main__':
    with app.app_context():
        print("Starting seed...")
        run()