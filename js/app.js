/* ============================================================
   StudySync — app.js
   ============================================================ */

// ── State ──────────────────────────────────────────────────────
let state = {
  language: 'en',
  user: {
    name: 'Ana Machava',
    role: 'Student',
    email: 'ana@example.com',
    bio: 'Focused, organized, and always ready to study.',
  },
  tasks: [
    { id: 1, name: "Review HCI lecture slides",                      subject: "HCI",         due: getDateStr(0), priority: "High",   done: false },
    { id: 2, name: "Read Chapter 4 — Norman's design principles",    subject: "HCI",         due: getDateStr(1), priority: "High",   done: false },
    { id: 3, name: "Complete linear algebra problem set",            subject: "Mathematics", due: getDateStr(2), priority: "Medium", done: false },
    { id: 4, name: "Study SQL joins and subqueries",                 subject: "Databases",   due: getDateStr(3), priority: "Medium", done: false },
    { id: 5, name: "Write program analysis report",                  subject: "Algorithms",  due: getDateStr(5), priority: "Low",    done: true  },
  ],
  subjects: [
    { id: 1, name: "HCI",         color: "#58a6ff" },
    { id: 2, name: "Mathematics", color: "#bc8cff" },
    { id: 3, name: "Databases",   color: "#3fb950" },
    { id: 4, name: "Algorithms",  color: "#d29922" },
  ],
  resources: [
    { id: 1, title: "Nielsen's 10 Usability Heuristics",              subject: "HCI",       type: "Link", url: "https://www.nngroup.com/articles/ten-usability-heuristics/" },
    { id: 2, title: "Norman — Design of Everyday Things (Summary)",   subject: "HCI",       type: "PDF",  url: "notes/norman.pdf" },
    { id: 3, title: "SQL Tutorial — W3Schools",                       subject: "Databases", type: "Link", url: "https://www.w3schools.com/sql/" },
  ],
  nextId: 10,
  selectedPriority: "High",
  selectedColor: "#58a6ff",
  currentPage: "dashboard",
};

const translations = {
  en: {
    'nav.dashboard': 'Dashboard',
    'nav.tasks': 'Tasks',
    'nav.subjects': 'Subjects',
    'nav.resources': 'Resources',
    'actions.editProfile': 'Edit Profile',
    'actions.addTask': '+ Add Task',
    'actions.addSubject': '+ Add Subject',
    'actions.addResource': '+ Add Resource',
    'actions.cancel': 'Cancel',
    'actions.saveTask': 'Save Task',
    'actions.saveProfile': 'Save Profile',
    'actions.addSubjectBtn': 'Add Subject',
    'actions.addResourceBtn': 'Add Resource',
    'actions.delete': 'Delete',
    'actions.openResource': 'Open ↗',
    'filters.allSubjects': 'All Subjects',
    'filters.allPriorities': 'All Priorities',
    'pages.tasksTitle': 'All Tasks',
    'pages.tasksSubtitle': 'Manage and track your study tasks',
    'pages.subjectsTitle': 'Subjects',
    'pages.subjectsSubtitle': 'Organize your courses and track progress',
    'pages.resourcesTitle': 'Resources',
    'pages.resourcesSubtitle': 'Links, notes, and study materials',
    'dashboard.todayTasks': 'Today\'s Tasks',
    'dashboard.pendingTasks': 'All Pending Tasks',
    'dashboard.upcoming': '📅 Upcoming Deadlines',
    'dashboard.progress': '📈 Subject Progress',
    'dashboard.overdueBy': 'Overdue by {days}d',
    'dashboard.dueToday': 'Due today',
    'dashboard.tomorrow': 'Tomorrow',
    'dashboard.daysAway': '{days} days',
    'dashboard.todayTaskSingular': '1 task',
    'dashboard.todayTasksCount': '{count} tasks',
    'dashboard.noTasksToday': '🎉 No tasks due today!',
    'dashboard.allCaughtUp': 'All caught up! ✨',
    'dashboard.noUpcoming': 'No upcoming deadlines 🎉',
    'dashboard.noSubjects': 'No subjects yet',
    'dashboard.noResources': 'No resources yet',
    'stats.totalTasks': 'Total Tasks',
    'stats.completed': 'Completed',
    'stats.dueSoon': 'Due Soon',
    'stats.subjects': 'Subjects',
    'forms.taskName': 'Task Name *',
    'forms.subject': 'Subject *',
    'forms.dueDate': 'Due Date *',
    'forms.priority': 'Priority',
    'forms.subjectName': 'Subject Name *',
    'forms.color': 'Color',
    'forms.title': 'Title *',
    'forms.type': 'Type',
    'forms.url': 'URL / Description',
    'forms.fullName': 'Full Name',
    'forms.role': 'Role',
    'forms.email': 'Email',
    'forms.bio': 'Bio',
    'priority.high': 'High',
    'priority.medium': 'Medium',
    'priority.low': 'Low',
    'filters.selectSubject': 'Select subject...',
    'resourceTypes.link': 'Link',
    'resourceTypes.note': 'Note',
    'resourceTypes.pdf': 'PDF',
    'resourceTypes.video': 'Video',
    'placeholder.taskExample': 'e.g., Study Chapter 5 — HCI',
    'placeholder.subjectExample': 'e.g., Human-Computer Interaction',
    'placeholder.resourceTitleExample': 'e.g., Nielsen\'s 10 Heuristics PDF',
    'placeholder.resourceUrlExample': 'https://...',
    'placeholder.profileName': 'Your full name',
    'placeholder.profileRole': 'Student, Designer, etc.',
    'placeholder.profileEmail': 'you@example.com',
    'placeholder.profileBio': 'Tell us about your study style',
    'tasks.emptyTitle': 'No tasks found',
    'tasks.emptyText': 'Add a task to get started',
    'resources.emptyTitle': 'No resources yet',
    'resources.emptyText': 'Add links, notes, and study materials',
    'subjects.emptyTitle': 'No subjects yet',
    'subjects.emptyText': 'Add your first subject to get started',
    'subjects.statsTasksSingular': '📋 1 task',
    'subjects.statsTasksPlural': '📋 {count} tasks',
    'subjects.statsDoneSingular': '✅ 1 done',
    'subjects.statsDonePlural': '✅ {count} done',
    'subjects.statsComplete': '{percent}% complete',
    'modals.addTaskTitle': 'Add New Task',
    'modals.addSubjectTitle': 'Add New Subject',
    'modals.addResourceTitle': 'Add Resource',
    'modals.editProfileTitle': 'Edit Profile',
    'modals.confirmDeleteTitle': 'Confirm Deletion',
    'modals.confirmDeleteText': 'Are you sure you want to delete this item? This action cannot be undone.',
    'greeting.morning': 'Good morning, {name} 👋',
    'greeting.afternoon': 'Good afternoon, {name} 👋',
    'greeting.evening': 'Good evening, {name} 👋',
    'toast.taskAdded': '✅ Task added!',
    'toast.taskUpdated': '✏️ Task updated!',
    'toast.taskComplete': '✅ Task marked complete!',
    'toast.taskReopened': '↩️ Task reopened',
    'toast.subjectAdded': '📚 Subject added!',
    'toast.resourceAdded': '🔗 Resource added!',
    'toast.deleted': '🗑️ Deleted successfully',
    'toast.profileUpdated': '👤 Profile updated!',
    'toast.taskNameRequired': '⚠️ Please enter a task name',
    'toast.subjectRequired': '⚠️ Please select a subject',
    'toast.dueDateRequired': '⚠️ Please set a due date',
    'toast.subjectNameRequired': '⚠️ Please enter a subject name',
    'toast.subjectExists': '⚠️ Subject already exists',
    'toast.titleRequired': '⚠️ Please enter a title',
    'toast.profileNameRequired': '⚠️ Please enter your full name',
  },
  pt: {
    'nav.dashboard': 'Painel',
    'nav.tasks': 'Tarefas',
    'nav.subjects': 'Disciplinas',
    'nav.resources': 'Recursos',
    'actions.editProfile': 'Editar Perfil',
    'actions.addTask': '+ Adicionar Tarefa',
    'actions.addSubject': '+ Adicionar Disciplina',
    'actions.addResource': '+ Adicionar Recurso',
    'actions.cancel': 'Cancelar',
    'actions.saveTask': 'Salvar Tarefa',
    'actions.saveProfile': 'Salvar Perfil',
    'actions.addSubjectBtn': 'Adicionar Disciplina',
    'actions.addResourceBtn': 'Adicionar Recurso',
    'actions.delete': 'Excluir',
    'actions.openResource': 'Abrir ↗',
    'filters.allSubjects': 'Todas as Disciplinas',
    'filters.allPriorities': 'Todas as Prioridades',
    'pages.tasksTitle': 'Todas as Tarefas',
    'pages.tasksSubtitle': 'Gerencie e acompanhe suas tarefas de estudo',
    'pages.subjectsTitle': 'Disciplinas',
    'pages.subjectsSubtitle': 'Organize seus cursos e acompanhe o progresso',
    'pages.resourcesTitle': 'Recursos',
    'pages.resourcesSubtitle': 'Links, notas e materiais de estudo',
    'dashboard.todayTasks': 'Tarefas de Hoje',
    'dashboard.pendingTasks': 'Todas as Tarefas Pendentes',
    'dashboard.upcoming': '📅 Próximos Prazos',
    'dashboard.progress': '📈 Progresso por Disciplina',
    'dashboard.overdueBy': 'Atrasado {days}d',
    'dashboard.dueToday': 'Entrega hoje',
    'dashboard.tomorrow': 'Amanhã',
    'dashboard.daysAway': 'Em {days} dias',
    'dashboard.todayTaskSingular': '1 tarefa',
    'dashboard.todayTasksCount': '{count} tarefas',
    'dashboard.noTasksToday': '🎉 Nenhuma tarefa para hoje!',
    'dashboard.allCaughtUp': 'Tudo em dia! ✨',
    'dashboard.noUpcoming': 'Nenhum prazo próximo 🎉',
    'dashboard.noSubjects': 'Nenhuma disciplina ainda',
    'dashboard.noResources': 'Nenhum recurso ainda',
    'stats.totalTasks': 'Total de Tarefas',
    'stats.completed': 'Concluídas',
    'stats.dueSoon': 'Próximas',
    'stats.subjects': 'Disciplinas',
    'forms.taskName': 'Nome da Tarefa *',
    'forms.subject': 'Disciplina *',
    'forms.dueDate': 'Data de Entrega *',
    'forms.priority': 'Prioridade',
    'forms.subjectName': 'Nome da Disciplina *',
    'forms.color': 'Cor',
    'forms.title': 'Título *',
    'forms.type': 'Tipo',
    'forms.url': 'URL / Descrição',
    'forms.fullName': 'Nome Completo',
    'forms.role': 'Função',
    'forms.email': 'E-mail',
    'forms.bio': 'Biografia',
    'priority.high': 'Alta',
    'priority.medium': 'Média',
    'priority.low': 'Baixa',
    'filters.selectSubject': 'Selecione uma disciplina...',
    'resourceTypes.link': 'Link',
    'resourceTypes.note': 'Nota',
    'resourceTypes.pdf': 'PDF',
    'resourceTypes.video': 'Vídeo',
    'placeholder.taskExample': 'ex: Estudar Capítulo 5 — HCI',
    'placeholder.subjectExample': 'ex: Interação Humano-Computador',
    'placeholder.resourceTitleExample': 'ex: PDF dos 10 Heurísticos de Nielsen',
    'placeholder.resourceUrlExample': 'https://...',
    'placeholder.profileName': 'Seu nome completo',
    'placeholder.profileRole': 'Estudante, Designer, etc.',
    'placeholder.profileEmail': 'voce@exemplo.com',
    'placeholder.profileBio': 'Conte-nos sobre seu estilo de estudo',
    'tasks.emptyTitle': 'Nenhuma tarefa encontrada',
    'tasks.emptyText': 'Adicione uma tarefa para começar',
    'resources.emptyTitle': 'Nenhum recurso ainda',
    'resources.emptyText': 'Adicione links, notas e materiais de estudo',
    'subjects.emptyTitle': 'Nenhuma disciplina ainda',
    'subjects.emptyText': 'Adicione sua primeira disciplina para começar',
    'subjects.statsTasksSingular': '📋 1 tarefa',
    'subjects.statsTasksPlural': '📋 {count} tarefas',
    'subjects.statsDoneSingular': '✅ 1 concluída',
    'subjects.statsDonePlural': '✅ {count} concluídas',
    'subjects.statsComplete': '{percent}% concluído',
    'modals.addTaskTitle': 'Adicionar Nova Tarefa',
    'modals.addSubjectTitle': 'Adicionar Nova Disciplina',
    'modals.addResourceTitle': 'Adicionar Recurso',
    'modals.editProfileTitle': 'Editar Perfil',
    'modals.confirmDeleteTitle': 'Confirmar Exclusão',
    'modals.confirmDeleteText': 'Tem certeza de que deseja excluir este item? Esta ação não pode ser desfeita.',
    'greeting.morning': 'Bom dia, {name} 👋',
    'greeting.afternoon': 'Boa tarde, {name} 👋',
    'greeting.evening': 'Boa noite, {name} 👋',
    'toast.taskAdded': '✅ Tarefa adicionada!',
    'toast.taskUpdated': '✏️ Tarefa atualizada!',
    'toast.taskComplete': '✅ Tarefa marcada como concluída!',
    'toast.taskReopened': '↩️ Tarefa reaberta',
    'toast.subjectAdded': '📚 Disciplina adicionada!',
    'toast.resourceAdded': '🔗 Recurso adicionado!',
    'toast.deleted': '🗑️ Excluído com sucesso',
    'toast.profileUpdated': '👤 Perfil atualizado!',
    'toast.taskNameRequired': '⚠️ Digite o nome da tarefa',
    'toast.subjectRequired': '⚠️ Selecione uma disciplina',
    'toast.dueDateRequired': '⚠️ Defina uma data de entrega',
    'toast.subjectNameRequired': '⚠️ Digite o nome da disciplina',
    'toast.subjectExists': '⚠️ Essa disciplina já existe',
    'toast.titleRequired': '⚠️ Digite um título',
    'toast.profileNameRequired': '⚠️ Digite seu nome completo',
  },
};

function t(key) {
  return (translations[state.language] && translations[state.language][key]) || translations.en[key] || key;
}

function setLanguage(lang) {
  state.language = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.textContent === (lang === 'pt' ? 'PT' : 'EN')));
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const text = t(el.dataset.i18n);
    if (text) el.textContent = text;
  });
  render();
}

// ── Date Utilities ─────────────────────────────────────────────
function getDateStr(daysFromNow) {
  const d = new Date();
  d.setDate(d.getDate() + daysFromNow);
  return d.toISOString().split('T')[0];
}

function formatDate(str) {
  const d = new Date(str + 'T00:00:00');
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function getDaysUntil(str) {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const due   = new Date(str + 'T00:00:00');
  return Math.ceil((due - today) / (1000 * 60 * 60 * 24));
}

// ── Navigation ─────────────────────────────────────────────────
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  document.getElementById('page-' + page).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => {
    if (n.dataset.page === page) n.classList.add('active');
  });

  state.currentPage = page;
  render();
}

// ── Render Orchestrator ────────────────────────────────────────
function render() {
  updateLanguageLabels();
  updateStats();
  renderUserProfile();
  renderDashboard();
  renderTasks();
  renderSubjects();
  renderResources();
  updateSelects();
  renderFilters();
}

// ── Stats ──────────────────────────────────────────────────────
function updateStats() {
  const all  = state.tasks;
  const done = all.filter(t => t.done).length;
  const soon = all.filter(t => !t.done && getDaysUntil(t.due) <= 3).length;
  document.getElementById('stat-total').textContent    = all.length;
  document.getElementById('stat-done').textContent     = done;
  document.getElementById('stat-soon').textContent     = soon;
  document.getElementById('stat-subjects').textContent = state.subjects.length;
}

// ── Task Card HTML ─────────────────────────────────────────────
function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .map(part => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase() || 'U';
}

function updateLanguageLabels() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const text = t(el.dataset.i18n);
    if (text) el.textContent = text;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const text = t(el.dataset.i18nPlaceholder);
    if (text) el.placeholder = text;
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const text = t(el.dataset.i18nTitle);
    if (text) el.title = text;
  });
  document.querySelectorAll('[data-i18n-value]').forEach(el => {
    const text = t(el.dataset.i18nValue);
    if (text) el.value = text;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const text = t(el.dataset.i18nAria);
    if (text) el.setAttribute('aria-label', text);
  });
}

function getGreeting(name) {
  const hour = new Date().getHours();
  if (hour < 12) return t('greeting.morning').replace('{name}', name);
  if (hour < 18) return t('greeting.afternoon').replace('{name}', name);
  return t('greeting.evening').replace('{name}', name);
}

function renderUserProfile() {
  const user = state.user || { name: 'Ana Machava', role: 'Student', email: 'ana@example.com', bio: '' };
  const avatar = document.getElementById('sidebar-avatar');
  const nameEl = document.getElementById('sidebar-user-name');
  const greeting = document.getElementById('greeting-title');

  if (avatar) avatar.textContent = getInitials(user.name);
  if (nameEl) nameEl.textContent = user.name;
  if (greeting) greeting.textContent = getGreeting(user.name);
}

function getDueLabel(days) {
  if (days < 0) return t('dashboard.overdueBy').replace('{days}', Math.abs(days));
  if (days === 0) return t('dashboard.dueToday');
  if (days === 1) return t('dashboard.tomorrow');
  return t('dashboard.daysAway').replace('{days}', days);
}

function taskCard(t, showDelete = true) {
  const days   = getDaysUntil(t.due);
  const urgency = days < 0 ? 'var(--red)' : days === 0 ? 'var(--red)' : days <= 3 ? 'var(--amber)' : 'var(--muted)';
  const dueLabel = getDueLabel(days);

  const sub      = state.subjects.find(s => s.name === t.subject);
  const subColor = sub ? sub.color : '#58a6ff';

  return `
    <div class="task-item ${t.done ? 'done' : ''}" id="task-${t.id}">
      <div class="task-check ${t.done ? 'checked' : ''}" onclick="toggleTask(${t.id})">
        ${t.done ? '✓' : ''}
      </div>
      <div style="flex:1;min-width:0">
        <div class="task-name">${t.name}</div>
        <div style="display:flex;gap:8px;align-items:center;margin-top:4px">
          <span class="badge badge-subject" style="background:${subColor}22;color:${subColor}">${t.subject}</span>
          <span class="badge badge-${t.priority.toLowerCase()}">${t.priority}</span>
          <span class="task-meta" style="color:${urgency}">${dueLabel}</span>
        </div>
      </div>
      <div class="task-actions">
        <button class="btn btn-ghost btn-sm" onclick="editTask(${t.id})">✏️</button>
        ${showDelete ? `<button class="btn btn-danger btn-sm" onclick="confirmDelete('task',${t.id})">🗑️</button>` : ''}
      </div>
    </div>`;
}

// ── Dashboard ──────────────────────────────────────────────────
function renderDashboard() {
  // Date
  document.getElementById('today-date').textContent =
    new Date().toLocaleDateString(state.language === 'pt' ? 'pt-PT' : 'en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  // Today's tasks
  const today      = getDateStr(0);
  const todayTasks = state.tasks.filter(t => t.due === today && !t.done);
  document.getElementById('today-count').textContent = todayTasks.length === 1
    ? t('dashboard.todayTaskSingular')
    : t('dashboard.todayTasksCount').replace('{count}', todayTasks.length);
  document.getElementById('today-tasks').innerHTML   = todayTasks.length
    ? todayTasks.map(t => taskCard(t)).join('')
    : `<div style="color:var(--muted);font-size:14px;padding:12px 0">${t('dashboard.noTasksToday')}</div>`;

  // All pending
  const pending = state.tasks
    .filter(t => !t.done && t.due !== today)
    .sort((a, b) => a.due.localeCompare(b.due));
  document.getElementById('all-tasks').innerHTML = pending.length
    ? pending.map(t => taskCard(t)).join('')
    : `<div style="color:var(--muted);font-size:14px;padding:12px 0">${t('dashboard.allCaughtUp')}</div>`;

  // Deadlines sidebar
  const upcoming = state.tasks
    .filter(t => !t.done)
    .sort((a, b) => a.due.localeCompare(b.due))
    .slice(0, 6);
  document.getElementById('deadlines-list').innerHTML = upcoming.length
    ? upcoming.map(t => {
        const days  = getDaysUntil(t.due);
        const color = days < 0 ? 'var(--red)' : days <= 1 ? 'var(--red)' : days <= 3 ? 'var(--amber)' : 'var(--green)';
        return `<div class="deadline-item">
          <div class="deadline-dot" style="background:${color}"></div>
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${t.name}</div>
            <div style="font-size:11px;color:var(--muted)">${t.subject} · ${formatDate(t.due)}</div>
          </div>
        </div>`;
      }).join('')
    : `<div style="color:var(--muted);font-size:14px">${t('dashboard.noUpcoming')}</div>`;

  // Subject progress
  document.getElementById('subject-progress').innerHTML = state.subjects.map(s => {
    const total = state.tasks.filter(t => t.subject === s.name).length;
    const done  = state.tasks.filter(t => t.subject === s.name && t.done).length;
    const pct   = total ? Math.round((done / total) * 100) : 0;
    return `<div style="margin-bottom:14px">
      <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px">
        <span>${s.name}</span><span style="color:var(--muted)">${done}/${total}</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width:${pct}%;background:${s.color}"></div>
      </div>
    </div>`;
  }).join('') || `<div style="color:var(--muted);font-size:14px">${t('dashboard.noSubjects')}</div>`;
}

// ── Task Manager ───────────────────────────────────────────────
function renderTasks() {
  const fSub = document.getElementById('filter-subject')?.value  || '';
  const fPri = document.getElementById('filter-priority')?.value || '';

  let tasks = [...state.tasks];
  if (fSub) tasks = tasks.filter(t => t.subject  === fSub);
  if (fPri) tasks = tasks.filter(t => t.priority === fPri);
  tasks.sort((a, b) => a.done - b.done || a.due.localeCompare(b.due));

  const el = document.getElementById('tasks-full');
  if (el) el.innerHTML = tasks.length
    ? tasks.map(t => taskCard(t)).join('')
    : `<div class="empty-state"><div class="icon">📋</div><h3>${t('tasks.emptyTitle')}</h3><p>${t('tasks.emptyText')}</p></div>`;
}

function renderFilters() {
  const fs = document.getElementById('filter-subject');
  if (!fs) return;
  const val = fs.value;
  fs.innerHTML = `<option value="">${t('filters.allSubjects')}</option>` +
    state.subjects.map(s => `<option value="${s.name}" ${val === s.name ? 'selected' : ''}>${s.name}</option>`).join('');
}

// ── Subjects ───────────────────────────────────────────────────
function renderSubjects() {
  const el = document.getElementById('subjects-grid');
  if (!el) return;
  el.innerHTML = state.subjects.map(s => {
    const total = state.tasks.filter(t => t.subject === s.name).length;
    const done  = state.tasks.filter(t => t.subject === s.name && t.done).length;
    const pct   = total ? Math.round((done / total) * 100) : 0;
    return `<div class="subject-card">
      <div class="color-bar" style="background:${s.color}"></div>
      <div style="display:flex;justify-content:space-between;align-items:start;margin-top:8px">
        <div class="subject-name">${s.name}</div>
        <button class="btn btn-danger btn-sm" onclick="confirmDelete('subject',${s.id})" style="opacity:0.6">🗑️</button>
      </div>
      <div class="subject-stats">
        <span>${total === 1 ? t('subjects.statsTasksSingular') : t('subjects.statsTasksPlural').replace('{count}', total)}</span>
        <span>${done === 1 ? t('subjects.statsDoneSingular') : t('subjects.statsDonePlural').replace('{count}', done)}</span>
        <span>${t('subjects.statsComplete').replace('{percent}', pct)}</span>
      </div>
      <div class="progress-bar" style="margin-top:12px">
        <div class="progress-fill" style="width:${pct}%;background:${s.color}"></div>
      </div>
    </div>`;
  }).join('') ||
  `<div class="empty-state"><div class="icon">📚</div><h3>${t('subjects.emptyTitle')}</h3><p>${t('subjects.emptyText')}</p></div>`;
}

// ── Resources ──────────────────────────────────────────────────
function renderResources() {
  const el    = document.getElementById('resources-list');
  if (!el) return;
  const icons = { Link: '🔗', Note: '📝', PDF: '📄', Video: '🎥' };
  el.innerHTML = state.resources.length
    ? `<div style="display:flex;flex-direction:column;gap:10px">` +
        state.resources.map(r => {
          const sub   = state.subjects.find(s => s.name === r.subject);
          const color = sub ? sub.color : '#58a6ff';
          return `<div class="task-item" role="listitem">
            <span style="font-size:22px" aria-hidden="true">${icons[r.type] || '📎'}</span>
            <div style="flex:1">
              <div style="font-size:14px;font-weight:500">${r.title}</div>
              <div style="display:flex;gap:8px;align-items:center;margin-top:4px">
                ${r.subject ? `<span class="badge" style="background:${color}22;color:${color}">${r.subject}</span>` : ''}
                <span class="badge" style="background:var(--surface2);color:var(--muted)">${t('resourceTypes.' + r.type.toLowerCase()) || r.type}</span>
                ${r.url ? `<a href="${r.url}" target="_blank" style="font-size:12px;color:var(--accent);text-decoration:none" aria-label="Open resource: ${r.title}">${t('actions.openResource')}</a>` : ''}
              </div>
            </div>
            <div class="task-actions">
              <button class="btn btn-ghost btn-sm" onclick="editResource(${r.id})" aria-label="Edit resource ${r.title}">✏️</button>
              <button class="btn btn-danger btn-sm" onclick="confirmDelete('resource',${r.id})" aria-label="Delete resource ${r.title}">🗑️</button>
            </div>
          </div>`;
        }).join('') + `</div>`
    : `<div class="empty-state"><div class="icon">🔗</div><h3>${t('resources.emptyTitle')}</h3><p>${t('resources.emptyText')}</p></div>`;
}

// ── Select Sync ────────────────────────────────────────────────
function updateSelects() {
  ['task-subject', 'res-subject'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const val = el.value;
    el.innerHTML = `<option value="">${t('filters.selectSubject')}</option>` +
      state.subjects.map(s => `<option value="${s.name}" ${val === s.name ? 'selected' : ''}>${s.name}</option>`).join('');
  });
}

// ── Task Actions ───────────────────────────────────────────────
function toggleTask(id) {
  const task = state.tasks.find(t => t.id === id);
  if (!task) return;
  task.done = !task.done;
  showToast(task.done ? t('toast.taskComplete') : t('toast.taskReopened'), task.done ? 'success' : '');
  render();
}

function openAddTask() {
  document.getElementById('modal-task-title').textContent = t('modals.addTaskTitle');
  document.getElementById('task-name').value              = '';
  document.getElementById('task-due').value               = getDateStr(1);
  document.getElementById('edit-task-id').value           = '';
  state.selectedPriority = 'High';
  updatePriorityBtns();
  updateSelects();
  openModal('modal-task');
}

function editTask(id) {
  const task = state.tasks.find(t => t.id === id);
  if (!task) return;
  document.getElementById('modal-task-title').textContent = t('modals.editTaskTitle');
  document.getElementById('task-name').value              = task.name;
  document.getElementById('task-due').value               = task.due;
  document.getElementById('edit-task-id').value           = id;
  state.selectedPriority = t.priority;
  updatePriorityBtns();
  updateSelects();
  setTimeout(() => { document.getElementById('task-subject').value = t.subject; }, 50);
  openModal('modal-task');
}

function saveTask() {
  const name    = document.getElementById('task-name').value.trim();
  const subject = document.getElementById('task-subject').value;
  const due     = document.getElementById('task-due').value;
  const editId  = document.getElementById('edit-task-id').value;

  if (!name)    { showToast(t('toast.taskNameRequired'), 'error');   return; }
  if (!subject) { showToast(t('toast.subjectRequired'),  'error');   return; }
  if (!due)     { showToast(t('toast.dueDateRequired'),    'error');   return; }

  if (editId) {
    const t = state.tasks.find(t => t.id == editId);
    Object.assign(t, { name, subject, due, priority: state.selectedPriority });
    showToast(t('toast.taskUpdated'), 'success');
  } else {
    state.tasks.push({ id: state.nextId++, name, subject, due, priority: state.selectedPriority, done: false });
    showToast(t('toast.taskAdded'), 'success');
  }
  closeModal('modal-task');
  render();
}

function selectPriority(p) {
  state.selectedPriority = p;
  updatePriorityBtns();
}

function updatePriorityBtns() {
  document.querySelectorAll('.priority-btn').forEach(b => {
    b.className = 'priority-btn';
    if (b.dataset.priority === state.selectedPriority) {
      b.classList.add('selected-' + state.selectedPriority.toLowerCase());
    }
  });
}

// ── Subject Actions ────────────────────────────────────────────
function openProfileEditor() {
  document.getElementById('profile-name').value = state.user.name;
  document.getElementById('profile-role').value = state.user.role;
  document.getElementById('profile-email').value = state.user.email;
  document.getElementById('profile-bio').value = state.user.bio;
  openModal('modal-profile');
}

function saveProfile() {
  const name = document.getElementById('profile-name').value.trim();
  if (!name) {
    showToast(t('toast.profileNameRequired'), 'error');
    return;
  }

  state.user = {
    name,
    role: document.getElementById('profile-role').value.trim() || 'Student',
    email: document.getElementById('profile-email').value.trim() || 'student@example.com',
    bio: document.getElementById('profile-bio').value.trim() || 'Ready to learn and stay organized.',
  };

  render();
  closeModal('modal-profile');
  showToast(t('toast.profileUpdated'), 'success');
}

function openAddSubject() {
  document.getElementById('subject-name').value = '';
  state.selectedColor = '#58a6ff';
  updateColorBtns();
  openModal('modal-subject');
}

function selectColor(c) {
  state.selectedColor = c;
  updateColorBtns();
}

function updateColorBtns() {
  document.querySelectorAll('.color-opt').forEach(b => {
    b.style.border = b.dataset.color === state.selectedColor ? '3px solid white' : '2px solid transparent';
  });
}

function saveSubject() {
  const name = document.getElementById('subject-name').value.trim();
  if (!name) { showToast(t('toast.subjectNameRequired'), 'error'); return; }
  if (state.subjects.find(s => s.name.toLowerCase() === name.toLowerCase())) {
    showToast(t('toast.subjectExists'), 'error'); return;
  }
  state.subjects.push({ id: state.nextId++, name, color: state.selectedColor });
  showToast(t('toast.subjectAdded'), 'success');
  closeModal('modal-subject');
  render();
}

// ── Resource Actions ───────────────────────────────────────────
function openAddResource() {
  document.getElementById('res-title').value = '';
  document.getElementById('res-url').value   = '';
  document.getElementById('edit-resource-id').value = '';
  updateSelects();
  openModal('modal-resource');
}

function saveResource() {
  const title = document.getElementById('res-title').value.trim();
  if (!title) { showToast(t('toast.titleRequired'), 'error'); return; }
  const editId = document.getElementById('edit-resource-id').value;
  const payload = {
    title,
    subject: document.getElementById('res-subject').value,
    type:    document.getElementById('res-type').value,
    url:     document.getElementById('res-url').value.trim(),
  };

  if (editId) {
    const r = state.resources.find(r => r.id == editId);
    if (r) Object.assign(r, payload);
    showToast(t('toast.resourceAdded'), 'success');
  } else {
    state.resources.push(Object.assign({ id: state.nextId++ }, payload));
    showToast(t('toast.resourceAdded'), 'success');
  }
  document.getElementById('edit-resource-id').value = '';
  closeModal('modal-resource');
  saveResourcesToStorage();
  render();
}

function editResource(id) {
  const r = state.resources.find(r => r.id === id);
  if (!r) return;
  document.getElementById('res-title').value = r.title || '';
  document.getElementById('res-url').value   = r.url || '';
  document.getElementById('res-type').value  = r.type || 'Link';
  document.getElementById('res-subject').value = r.subject || '';
  document.getElementById('edit-resource-id').value = r.id;
  openModal('modal-resource');
}

// ── Delete ─────────────────────────────────────────────────────
let pendingDelete = null;

function confirmDelete(type, id) {
  pendingDelete = { type, id };
  openModal('modal-confirm');
}

document.getElementById('confirm-delete-btn').onclick = function () {
  if (!pendingDelete) return;
  const { type, id } = pendingDelete;
  if (type === 'task')     state.tasks     = state.tasks.filter(t => t.id !== id);
  if (type === 'subject') {
    const name = state.subjects.find(s => s.id === id)?.name;
    state.subjects = state.subjects.filter(s => s.id !== id);
    if (name) state.tasks = state.tasks.filter(t => t.subject !== name);
  }
  if (type === 'resource') state.resources = state.resources.filter(r => r.id !== id);
  showToast(t('toast.deleted'), 'success');
  closeModal('modal-confirm');
  pendingDelete = null;
  saveResourcesToStorage();
  render();
};

// ── Modal Helpers ──────────────────────────────────────────────
function openModal(id)  { document.getElementById(id).classList.add('open');    }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

document.querySelectorAll('.modal-overlay').forEach(o => {
  o.addEventListener('click', e => { if (e.target === o) o.classList.remove('open'); });
});

// ── Toast ──────────────────────────────────────────────────────
function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className   = `toast ${type}`;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ── Init ───────────────────────────────────────────────────────
updateColorBtns();
loadResourcesFromStorage();
render();

// ── PWA install handling ───────────────────────────────────────
let deferredInstallPrompt = null;
const installCTA = document.getElementById('install-cta');
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  showInstallCTA();
});

window.addEventListener('appinstalled', () => {
  showToast('StudySync installed!');
  hideInstallCTA();
  deferredInstallPrompt = null;
});

function showInstallCTA() {
  const el = document.getElementById('install-cta');
  const help = document.getElementById('install-help');
  if (el) el.classList.remove('hidden');
  if (help) help.classList.add('hidden');
}

function hideInstallCTA() {
  const el = document.getElementById('install-cta');
  if (el) el.classList.add('hidden');
}

function promptInstall(kind) {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.then(choice => {
      if (choice.outcome === 'accepted') {
        showToast('StudySync installed!', 'success');
      } else {
        showToast('Installation canceled');
      }
      deferredInstallPrompt = null;
      hideInstallCTA();
    });
    return;
  }

  showManualInstallInstructions();
}

function isIos() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent);
}

function showManualInstallInstructions() {
  const help = document.getElementById('install-help');
  if (help) {
    if (isIos()) {
      help.textContent = 'Open Safari Share → Add to Home Screen to install StudySync.';
    } else {
      help.textContent = 'Use your browser menu and choose Add to Home Screen or Install app.';
    }
    help.classList.remove('hidden');
    hideInstallCTA();
    return;
  }

  if (isIos()) {
    showToast('Use Safari Share → Add to Home Screen to install StudySync.');
  } else {
    showToast('Use your browser menu and choose Add to Home Screen or Install app.');
  }
}

function hideInstallHelp() {
  const help = document.getElementById('install-help');
  if (help) help.classList.add('hidden');
}

// Register service worker for PWA support
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { scope: '/' }).catch(err => console.warn('SW register failed:', err));
}

// ── Persistence: resources to localStorage ──────────────────────
function saveResourcesToStorage() {
  try {
    localStorage.setItem('studysync_resources_v1', JSON.stringify(state.resources));
  } catch (e) {
    console.warn('Could not save resources to localStorage', e);
  }
}

function loadResourcesFromStorage() {
  try {
    const raw = localStorage.getItem('studysync_resources_v1');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        state.resources = parsed;
      }
    }
  } catch (e) {
    console.warn('Could not load resources from localStorage', e);
  }
}
