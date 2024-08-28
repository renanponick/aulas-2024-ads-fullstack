import React, { useState } from 'react';

export default function Form() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: '',
        idade: '',
        cor: '',
        anexo: null
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value
        }));
        console.log(name, value, type, files)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="mensagem">Mensagem:</label><br />
                <textarea
                    id="mensagem"
                    name="mensagem"
                    rows="4"
                    cols="50"
                    value={formData.mensagem}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label htmlFor="idade">Idade:</label>
                <input
                    type="number"
                    id="idade"
                    name="idade"
                    value={formData.idade}
                    onChange={handleChange}
                    min="18"
                    max="100"
                />
            </div>
            <div>
                <label htmlFor="cor">Cor favorita:</label>
                <input
                    type="color"
                    id="cor"
                    name="cor"
                    value={formData.cor}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="anexo">Anexo:</label>
                <input
                    type="file"
                    id="anexo"
                    name="anexo"
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Enviar</button>
        </form></section>
    );
}