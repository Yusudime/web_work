from dotenv import load_dotenv
from flask_sqlalchemy import SQLAlchemy

config = dotenv_values(".env")
url = f'{config['DRIVER']}://confing['USER']:{config['PASSWORD']}@{config['HOST']}/{config['PORT']}/{confing[DB]}'

db = SQLAlchemy()