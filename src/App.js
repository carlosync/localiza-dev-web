import React from 'react';
import "./Global.css"
import "./App.css"
import "./Sidebar.css"
import "./Main.css"

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required />
          </div>
          
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>
          
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
            </div>  
          </div>  
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/3606676?s=460&v=4" alt="Carlos Aurélio" />
              <div className="user-info">
                <strong>Carlos Aurélio</strong>
                <span>Java, VueJS, Flutter, ReactJS, Javascript</span>  
              </div>
            </header>
            <p>Analista de Sistemas apaixonado por desenvolvimento web.</p>
            <a href="https://github.com/carlosync">Perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/2254731?s=460&v=4" alt="Diego Fernandes" />
              <div className="user-info">
                <strong>Diego Fernandes</strong>
                <span>ReactJS, React Native, NodeJs e Javascript</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/diego3g">Perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/797072?s=460&v=4" alt="Normandes Junior" />
              <div className="user-info">
                <strong>Normandes Junior</strong>
                <span>Java, Spring Framework, Javascript, TypeScript</span>
              </div>
            </header>
            <p>IT Specialist at @ZupIT and founder of hibicode.com</p>
            <a href="https://github.com/normandesjr">Perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
