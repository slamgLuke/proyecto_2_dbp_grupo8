# create a base sqlalchemy database instance
from flask import Flask
import datetime
from dataclasses import dataclass
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

@dataclass
class Player(db.Model):
    id: int
    username: str
    password: str
    logged_in: bool
    wins: int
    defeats: int
    ties: int

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    password = db.Column(db.String(20), nullable=False)
    logged_in = db.Column(db.Boolean, nullable=False, default=False)
    wins = db.Column(db.Integer, nullable=False, default=0)
    defeats = db.Column(db.Integer, nullable=False, default=0)
    ties = db.Column(db.Integer, nullable=False, default=0)

    def __repr__(self):
        return f'<player {self.username}>'

@dataclass
class Lobby(db.Model):
    id: int
    name: str
    player_id: int
    active: bool

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), unique=True, nullable=False, default=f'lobby {id}')
    player_id = db.Column(db.Integer, db.ForeignKey('player.id'), nullable=False)
    active = db.Column(db.Boolean, nullable=False, default=True)

    def __repr__(self):
        return f'<lobby {self.id}>'


@dataclass
class Word(db.Model):
    word: str
    length: int

    word = db.Column(db.String(20), primary_key=True)
    length = db.Column(db.Integer, nullable=False, default=0)

    def __repr__(self):
        return f'<word {self.word}>'

@dataclass
class Game(db.Model):
    id: int
    player1_id: int
    player2_id: int
    word1: str
    word2: str
    lives1: int
    lives2: int
    guesses1: str
    guesses2: str
    outcome: int
    date: str

    id = db.Column(db.Integer, primary_key=True)
    player1_id = db.Column(db.Integer, db.ForeignKey('player.id'), nullable=False)
    player2_id = db.Column(db.Integer, db.ForeignKey('player.id'), nullable=False)
    word1 = db.Column(db.String(20), db.ForeignKey('word.word'), nullable=False)
    word2 = db.Column(db.String(20), db.ForeignKey('word.word'), nullable=False)
    lives1 = db.Column(db.Integer, nullable=False, default=6)
    lives2 = db.Column(db.Integer, nullable=False, default=6)
    guesses1 = db.Column(db.String(20), nullable=False, default='')
    guesses2 = db.Column(db.String(20), nullable=False, default='')
    outcome = db.Column(db.Integer, nullable=False, default=0)
    date = db.Column(db.String(20), nullable=False, default=f'{datetime.datetime.now()}')

    def __repr__(self):
        return f'<game {self.id}>'


def init_db():
    with app.app_context():
        db.create_all()
        db.session.commit()


if __name__ == '__main__':
    init_db()

