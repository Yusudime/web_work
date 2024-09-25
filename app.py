from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from settings import db
db.init_app(app)
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    titulo = request.form['form-titutlo']
    descricao = request.form['form-descricao']
    questions = []

    # Coletar perguntas
    question_count = int(request.form['question-count'])
    for i in range(1, question_count + 1):
        question_text = request.form[f'question-text-{i}']
        question_type = request.form[f'question-type-{i}']
        options = request.form.get(f'options-{i}', '').splitlines() if question_type in ['multiple-choice', 'checkbox'] else []

        questions.append({
            'text': question_text,
            'type': question_type,
            'options': options
        })

    # Aqui você pode salvar os dados em um banco de dados ou processá-los como necessário.
    print({
        'title': titulo,
        'description': descricao,
        'questions': questions
    })

    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
