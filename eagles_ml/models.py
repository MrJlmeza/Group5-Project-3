from .app import db

class Eagles_ML(db.Model):
    __tablename__ = 'eagles_ml'

    id = db.Column(db.Integer, primary_key=True)
    playername = db.Column(db.String(150))
    playernumber = db.Column(db.Integer)
    position = db.Column(db.String(5))
    height = db.Column(db.Float)
    weight = db.Column(db.Float)
    age = db.Column(db.Integer)
    experience = db.Column(db.String(5))
    college = db.Column(db.String(150))
    year = db.Column(db.Integer)

    def __repr__(self):
        return '<Pet %r>' % (self.name)
