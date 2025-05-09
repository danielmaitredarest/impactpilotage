document.addEventListener('DOMContentLoaded', function() {
    // Navigation entre les onglets
    const navItems = document.querySelectorAll('.nav-item');
    const contentPages = document.querySelectorAll('.content-page');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Enlever la classe active de tous les onglets
            navItems.forEach(navItem => {
                navItem.classList.remove('active');
            });
            
            // Ajouter la classe active à l'onglet cliqué
            this.classList.add('active');
            
            // Afficher la page correspondante
            const pageName = this.getAttribute('data-page');
            contentPages.forEach(page => {
                page.classList.remove('active');
                if (page.id === pageName) {
                    page.classList.add('active');
                }
            });
        });
    });
    
    // Navigation entre les projets
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach(item => {
        item.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            alert(`Ouverture du projet: ${projectId}`);
            // Ici on pourrait rediriger vers une page de détail du projet
        });
    });
    
    // Fonctionnalité de recherche
    const searchInput = document.querySelector('.search-container input');
    
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            alert(`Recherche: ${this.value}`);
            this.value = '';
        }
    });
    
    // Notifications
    const notificationsIcon = document.querySelector('.notifications');
    
    notificationsIcon.addEventListener('click', function() {
        alert('Centre de notifications');
    });
    
    // Profil utilisateur
    const userProfile = document.querySelector('.user-profile');
    
    userProfile.addEventListener('click', function() {
        alert('Paramètres du profil');
    });
    
    // Documents - Actions
    const documentActionButtons = document.querySelectorAll('.document-actions button');
    
    documentActionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const action = this.querySelector('i').className;
            
            if (action.includes('download')) {
                alert('Téléchargement du document');
            } else if (action.includes('share')) {
                alert('Partage du document');
            } else if (action.includes('ellipsis')) {
                alert('Plus d\'options');
            }
        });
    });
    
    // Emails - Actions
    const emailItems = document.querySelectorAll('.email-item');
    
    emailItems.forEach(item => {
        item.addEventListener('click', function() {
            emailItems.forEach(email => email.classList.remove('selected'));
            this.classList.add('selected');
            // Dans une vraie application, on chargerait le contenu de l'email
        });
    });
    
    // Éditeur IA - Actions
    const aiAssistantButton = document.querySelector('.ai-prompt button');
    
    aiAssistantButton.addEventListener('click', function() {
        const prompt = document.querySelector('.ai-prompt textarea').value;
        if (prompt.trim() !== '') {
            alert(`Question envoyée à l'IA: ${prompt}`);
            document.querySelector('.ai-prompt textarea').value = '';
        }
    });
    
    const aiSuggestions = document.querySelectorAll('.ai-suggestions li');
    
    aiSuggestions.forEach(suggestion => {
        suggestion.addEventListener('click', function() {
            document.querySelector('.ai-prompt textarea').value = this.textContent;
        });
    });
    
    // Tâches - Drag and Drop
    const taskCards = document.querySelectorAll('.task-card');
    
    taskCards.forEach(card => {
        card.setAttribute('draggable', true);
        
        card.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', this.innerHTML);
            this.classList.add('dragging');
        });
        
        card.addEventListener('dragend', function() {
            this.classList.remove('dragging');
        });
    });
    
    const taskColumns = document.querySelectorAll('.tasks-column');
    
    taskColumns.forEach(column => {
        column.addEventListener('dragover', function(e) {
            e.preventDefault();
        });
        
        column.addEventListener('drop', function(e) {
            e.preventDefault();
            const data = e.dataTransfer.getData('text/plain');
            const draggingCard = document.querySelector('.dragging');
            
            if (draggingCard) {
                draggingCard.remove();
                
                const newCard = document.createElement('div');
                newCard.className = 'task-card';
                newCard.innerHTML = data;
                newCard.setAttribute('draggable', true);
                
                // Ajouter après l'en-tête de la colonne
                this.insertBefore(newCard, this.querySelector('.task-card'));
                
                // Réinitialiser les event listeners
                initTaskCardEvents(newCard);
            }
        });
    });
    
    function initTaskCardEvents(card) {
        card.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', this.innerHTML);
            this.classList.add('dragging');
        });
        
        card.addEventListener('dragend', function() {
            this.classList.remove('dragging');
        });
    }
    
    // Calendrier - Actions
    const calendarDays = document.querySelectorAll('.calendar-day:not(.disabled)');
    
    calendarDays.forEach(day => {
        day.addEventListener('click', function() {
            calendarDays.forEach(d => d.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    const events = document.querySelectorAll('.event');
    
    events.forEach(event => {
        event.addEventListener('click', function() {
            // Dans une vraie application, on afficherait les détails de l'événement
            const detailsPanel = document.querySelector('.event-details-panel');
            detailsPanel.style.display = 'block';
        });
    });
    
    const closeBtn = document.querySelector('.close-btn');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            const detailsPanel = document.querySelector('.event-details-panel');
            detailsPanel.style.display = 'none';
        });
    }
    
    // Analyses - Actions
    const analyticsFilterSelect = document.querySelectorAll('.analytics-filters select');
    
    analyticsFilterSelect.forEach(select => {
        select.addEventListener('change', function() {
            // Dans une vraie application, on mettrait à jour les graphiques
            alert(`Filtre changé: ${this.value}`);
        });
    });
    
    const exportButton = document.querySelector('.analytics-filters .btn-primary');
    
    if (exportButton) {
        exportButton.addEventListener('click', function() {
            alert('Exportation des analyses');
        });
    }
});
