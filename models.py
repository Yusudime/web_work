class User(db.model):
    descricao = db.Column(db.Integer,nullable=False )
    db.session.add(descricao)
    db.session.commit()
    titulo = db.Column(db.String(200), nullable=False,primary_key=True)
    db.session.add(titulo)
    db.session.commit()
def __init__(self, descricao, titulo):
    self.descricao = descricao
    self.titulo = titulo