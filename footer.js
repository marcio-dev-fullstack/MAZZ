// footer.js
const footerHTML = `
    <footer style="text-align: center; padding: 20px; background: #f1f1f1; margin-top: 50px; border-top: 1px solid #ddd;">
        <p>&copy; 2026 MAZZ. Todos os direitos reservados</p>
        <p>Desenvolvido por: <a href="https://razgo.com.br/" target="_blank" style="color: #0056b3; text-decoration: none; font-weight: bold;">RAZGO</a></p>
        <div style="margin-top: 10px;">
            <a href="index.html" style="margin: 0 10px;">Início</a> | 
            <a href="contato.html" style="margin: 0 10px;">Contato</a> |
            <a href="engenharias.html" style="margin: 0 10px;">Engenharia</a>
        </div>
    </footer>
`;

document.addEventListener("DOMContentLoaded", function() {
    // Verifica se já existe um footer para não duplicar
    if (!document.querySelector('footer')) {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
});