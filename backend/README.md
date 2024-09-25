**Classe `Usuario`**
   - **Descrição**: Representa um usuário que poderá visualizar as infroamções da API.
   - **Atributos**:
     - `id`: Identificador único do usuário.
     - `nome`: Nome do usuário.
     - `email`: Email do usuário.
     - `senha`: Senha de acesso.
     - `bloqueado`: Se o usuário está ou não bloqueado.
     - `role`: Definição do papel do usuário (ex.: administrador, visualizador).

**Classe `SUA-API`**
   - **Descrição**: Representa a classe principal da sua API pública (cachorro, piada, cat, etc).
   - **Atributos**:
     - `id`: Identificador da classe.
     - (crie outros atributos para a sua classe)

**Regras de Acesso**
- Administradores (Admin)
    - Pode criar/alterar/deletar outros administradores;
    - Pode bloquear e desbloquear usuário comum.
    - Pode criar/alterar/deletar as informações da outra classe do sistema (SUA-API).

- Usuário Comum (Viewer): 
    - Poderá criar/alterar/deletar a sua própria conta.
    - Usuários comuns APENAS LER as informações da outra classe do sistema (SUA-API).