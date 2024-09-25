class User(db.model):
    descricao = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(200), nullable=False)
def __init__(self, descricao, titulo):
    self.descricao = descricao
    self.titulo = titulo