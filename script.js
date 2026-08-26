const STORAGE_KEY = "worktracker_data_v1";


const translations = {

    es: {

        appSubtitle: "Control horario",
        personalAccount: "Cuenta personal",

        dashboard: "Inicio",
        history: "Historial",
        statistics: "Estadísticas",
        settings: "Configuración",

        storedLocally: "Datos almacenados localmente",

        welcome: "Bienvenido",
        welcomeDescription: "Aquí puedes controlar y consultar tus horas trabajadas.",

        currentStatus: "Estado actual",

        working: "Estás trabajando",
        notWorking: "No estás trabajando",

        active: "Trabajando",
        inactive: "No trabajando",

        timeWorkedCurrentSession: "Tiempo de la sesión actual",
        notStarted: "No has iniciado ninguna sesión.",

        clockIn: "Entrada",
        clockOut: "Salida",

        summary: "Resumen",
        yourActivity: "Tu actividad",

        today: "Hoy",
        thisWeek: "Esta semana",
        thisMonth: "Este mes",
        thisYear: "Este año",

        total: "Total",

        actions: "Acciones",
        manageTime: "Gestionar tiempo",

        addEntry: "Añadir fichaje",
        addEntryDescription: "Añade manualmente horas a un día",

        editEntries: "Modificar fichajes",
        editEntriesDescription: "Modifica tus fichajes registrados",

        adjustTime: "Ajustar tiempo",
        adjustTimeDescription: "Añade o resta tiempo a un fichaje",

        recentActivity: "Actividad reciente",
        latestEntries: "Últimos fichajes",
        viewAll: "Ver todo",

        noEntries: "Todavía no hay fichajes",
        noEntriesDescription: "Pulsa Entrada cuando comiences a trabajar.",

        workHistory: "Historial de trabajo",
        historyDescription: "Consulta todos tus fichajes y horas realizadas.",

        period: "Periodo",
        all: "Todos",
        customRange: "Rango personalizado",
        from: "Desde",
        to: "Hasta",
        clearFilter: "Limpiar",

        daysWorked: "Días trabajados",
        totalHours: "Horas totales",
        average: "Promedio",

        noHistory: "No hay historial",
        noHistoryDescription: "Tus fichajes aparecerán aquí.",

        yourStatistics: "Tus estadísticas",
        statisticsDescription: "Analiza tus horas trabajadas.",

        dailyAverage: "Promedio diario",
        basedOnWorkedDays: "Basado en días trabajados",

        mostWorkedDay: "Día con más horas",
        leastWorkedDay: "Día con menos horas",

        activity: "Actividad",
        hoursWorked: "Horas trabajadas",

        breakdown: "Desglose",
        dailyBreakdown: "Resumen diario",

        appSettings: "Configuración de la aplicación",
        settingsDescription: "Personaliza WorkTracker.",

        profile: "Perfil",
        profileDescription: "Gestiona tu nombre de usuario.",

        username: "Nombre de usuario",
        change: "Cambiar",

        appearance: "Apariencia",
        appearanceDescription: "Personaliza el aspecto de la aplicación.",

        darkMode: "Modo oscuro",
        darkModeDescription: "Cambia entre modo claro y oscuro.",

        language: "Idioma",
        languageDescription: "Selecciona el idioma de la aplicación.",
        appLanguage: "Idioma de la aplicación",

        dataManagement: "Gestión de datos",
        dataManagementDescription: "Tus datos se almacenan localmente.",

        exportData: "Exportar datos",
        importData: "Importar datos",

        dangerZone: "Zona de peligro",
        dangerZoneDescription: "Esta acción eliminará todos tus datos.",

        resetApplication: "Reiniciar aplicación",
        resetDescription: "Elimina todos los fichajes y datos guardados.",
        reset: "Reiniciar",

        welcomeSetup: "Bienvenido a WorkTracker",
        enterUsername: "Introduce tu nombre para comenzar.",

        save: "Guardar",
        saveChanges: "Guardar cambios",
        cancel: "Cancelar",

        selectDay: "Selecciona un día",
        selectEntry: "Selecciona un fichaje",

        adjustTimeModalDescription:
            "Añade o resta tiempo al tiempo efectivo trabajado.",

        grossTime: "Tiempo bruto",
        currentAdjustment: "Ajuste actual",
        effectiveTime: "Tiempo efectivo",

        addTime: "Añadir tiempo",
        subtractTime: "Restar tiempo",

        hours: "Horas",
        minutes: "Minutos",

        edit: "Editar",
        delete: "Eliminar",

        entryAdded: "Fichaje añadido correctamente.",
        entryUpdated: "Fichaje actualizado correctamente.",
        entryDeleted: "Fichaje eliminado correctamente.",
        adjustmentSaved: "Ajuste guardado correctamente.",

        clockInSuccess: "Entrada registrada correctamente.",
        clockOutSuccess: "Salida registrada correctamente.",

        usernameUpdated: "Nombre actualizado correctamente.",

        invalidDate: "La fecha seleccionada no es válida.",
        invalidTime: "Debes introducir una hora válida.",

        noEntriesToEdit: "No hay fichajes registrados.",
        noDataToExport: "No hay datos para exportar.",

        importSuccess: "Datos importados correctamente.",
        importError: "El archivo no es válido.",

        confirmDelete: "¿Seguro que quieres eliminar este fichaje?",
        confirmReset:
            "¿Seguro que quieres reiniciar la aplicación? Esta acción eliminará todos los datos.",

        openSession: "Sesión iniciada",

        days: "días"

    },


    en: {

        appSubtitle: "Time tracking",
        personalAccount: "Personal account",

        dashboard: "Home",
        history: "History",
        statistics: "Statistics",
        settings: "Settings",

        storedLocally: "Data stored locally",

        welcome: "Welcome",
        welcomeDescription: "Here you can track and review your worked hours.",

        currentStatus: "Current status",

        working: "You are working",
        notWorking: "You are not working",

        active: "Working",
        inactive: "Not working",

        timeWorkedCurrentSession: "Current session time",
        notStarted: "You have not started a session.",

        clockIn: "Clock in",
        clockOut: "Clock out",

        summary: "Summary",
        yourActivity: "Your activity",

        today: "Today",
        thisWeek: "This week",
        thisMonth: "This month",
        thisYear: "This year",

        total: "Total",

        actions: "Actions",
        manageTime: "Manage time",

        addEntry: "Add entry",
        addEntryDescription: "Manually add hours to a day",

        editEntries: "Edit entries",
        editEntriesDescription: "Modify your registered entries",

        adjustTime: "Adjust time",
        adjustTimeDescription: "Add or subtract time from an entry",

        recentActivity: "Recent activity",
        latestEntries: "Latest entries",
        viewAll: "View all",

        noEntries: "There are no entries yet",
        noEntriesDescription: "Press Clock in when you start working.",

        workHistory: "Work history",
        historyDescription: "Review all your entries and worked hours.",

        period: "Period",
        all: "All",
        customRange: "Custom range",
        from: "From",
        to: "To",
        clearFilter: "Clear",

        daysWorked: "Worked days",
        totalHours: "Total hours",
        average: "Average",

        noHistory: "No history",
        noHistoryDescription: "Your entries will appear here.",

        yourStatistics: "Your statistics",
        statisticsDescription: "Analyse your worked hours.",

        dailyAverage: "Daily average",
        basedOnWorkedDays: "Based on worked days",

        mostWorkedDay: "Day with most hours",
        leastWorkedDay: "Day with least hours",

        activity: "Activity",
        hoursWorked: "Worked hours",

        breakdown: "Breakdown",
        dailyBreakdown: "Daily summary",

        appSettings: "Application settings",
        settingsDescription: "Personalise WorkTracker.",

        profile: "Profile",
        profileDescription: "Manage your username.",

        username: "Username",
        change: "Change",

        appearance: "Appearance",
        appearanceDescription: "Customise the application appearance.",

        darkMode: "Dark mode",
        darkModeDescription: "Switch between light and dark mode.",

        language: "Language",
        languageDescription: "Select the application language.",
        appLanguage: "Application language",

        dataManagement: "Data management",
        dataManagementDescription: "Your data is stored locally.",

        exportData: "Export data",
        importData: "Import data",

        dangerZone: "Danger zone",
        dangerZoneDescription: "This action will delete all your data.",

        resetApplication: "Reset application",
        resetDescription: "Delete all saved entries and data.",
        reset: "Reset",

        welcomeSetup: "Welcome to WorkTracker",
        enterUsername: "Enter your name to start.",

        save: "Save",
        saveChanges: "Save changes",
        cancel: "Cancel",

        selectDay: "Select a day",
        selectEntry: "Select an entry",

        adjustTimeModalDescription:
            "Add or subtract time from the effective worked time.",

        grossTime: "Gross time",
        currentAdjustment: "Current adjustment",
        effectiveTime: "Effective time",

        addTime: "Add time",
        subtractTime: "Subtract time",

        hours: "Hours",
        minutes: "Minutes",

        edit: "Edit",
        delete: "Delete",

        entryAdded: "Entry added successfully.",
        entryUpdated: "Entry updated successfully.",
        entryDeleted: "Entry deleted successfully.",
        adjustmentSaved: "Adjustment saved successfully.",

        clockInSuccess: "Clock in registered successfully.",
        clockOutSuccess: "Clock out registered successfully.",

        usernameUpdated: "Username updated successfully.",

        invalidDate: "The selected date is not valid.",
        invalidTime: "You must enter a valid time.",

        noEntriesToEdit: "There are no registered entries.",
        noDataToExport: "There is no data to export.",

        importSuccess: "Data imported successfully.",
        importError: "The file is not valid.",

        confirmDelete: "Are you sure you want to delete this entry?",
        confirmReset:
            "Are you sure you want to reset the application? This action will delete all data.",

        openSession: "Session started",

        days: "days"

    }

};


/* =========================
   STATE
========================= */

let state = null;

let timerInterval = null;


/* =========================
   INITIALIZATION
========================= */

document.addEventListener("DOMContentLoaded", init);


function init() {

    loadState();

    applySettings();

    bindEvents();

    updateClock();

    setInterval(updateClock, 1000);

    refreshApplication();

    startLiveTimer();

    if (!state.settings.username) {
        openModal("usernameModal");
    }

}


/* =========================
   STORAGE
========================= */

function getDefaultState() {

    return {

        version: 1,

        settings: {

            username: "",

            language: "es",

            theme: "dark",

            createdAt: new Date().toISOString()

        },

        entries: []

    };

}


function loadState() {

    try {

        const saved = localStorage.getItem(STORAGE_KEY);

        state = saved
            ? JSON.parse(saved)
            : getDefaultState();

        state.settings ||= {};
        state.entries ||= [];

        state.settings.language ||= "es";
        state.settings.theme ||= "dark";
        state.settings.createdAt ||= new Date().toISOString();

    } catch (error) {

        console.error(error);

        state = getDefaultState();

    }

}


function saveState() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(state)
    );

}


/* =========================
   EVENTS
========================= */

function bindEvents() {

    document
        .querySelectorAll(".nav-item")
        .forEach(button => {

            button.addEventListener("click", () => {

                showSection(button.dataset.section);

            });

        });


    document
        .getElementById("openSidebarBtn")
        .addEventListener("click", () => {

            document
                .getElementById("sidebar")
                .classList.add("open");

        });


    document
        .getElementById("closeSidebarBtn")
        .addEventListener("click", () => {

            document
                .getElementById("sidebar")
                .classList.remove("open");

        });


    document
        .getElementById("clockInBtn")
        .addEventListener("click", clockIn);


    document
        .getElementById("clockOutBtn")
        .addEventListener("click", clockOut);


    document
        .getElementById("themeToggleBtn")
        .addEventListener("click", toggleTheme);


    document
        .getElementById("darkModeSwitch")
        .addEventListener("change", event => {

            state.settings.theme =
                event.target.checked
                    ? "dark"
                    : "light";

            saveState();

            applySettings();

        });


    document
        .getElementById("languageToggleBtn")
        .addEventListener("click", toggleLanguage);


    document
        .getElementById("settingsLanguage")
        .addEventListener("change", event => {

            state.settings.language = event.target.value;

            saveState();

            refreshApplication();

        });


    document
        .getElementById("topbarAvatar")
        .addEventListener("click", () => {

            showSection("settings");

        });


    document
        .getElementById("openAddEntryBtn")
        .addEventListener("click", openAddEntryModal);


    document
        .getElementById("historyAddBtn")
        .addEventListener("click", openAddEntryModal);


    document
        .getElementById("openEditEntryBtn")
        .addEventListener("click", openEditEntryModal);


    document
        .getElementById("openAdjustTimeBtn")
        .addEventListener("click", openAdjustTimeModal);


    document
        .getElementById("viewAllHistoryBtn")
        .addEventListener("click", () => {

            showSection("history");

        });


    document
        .getElementById("changeUsernameBtn")
        .addEventListener("click", () => {

            document
                .getElementById("usernameInput")
                .value = state.settings.username;

            openModal("usernameModal");

        });


    document
        .getElementById("usernameForm")
        .addEventListener("submit", saveUsername);


    document
        .getElementById("addEntryForm")
        .addEventListener("submit", addManualEntry);


    document
        .getElementById("adjustTimeForm")
        .addEventListener("submit", saveAdjustment);


    document
        .getElementById("historyPeriodFilter")
        .addEventListener("change", event => {

            const custom =
                event.target.value === "custom";

            document
                .getElementById("historyCustomDates")
                .classList.toggle("hidden", !custom);

            renderHistory();

        });


    document
        .getElementById("historyFromDate")
        .addEventListener("change", renderHistory);


    document
        .getElementById("historyToDate")
        .addEventListener("change", renderHistory);


    document
        .getElementById("clearHistoryFilterBtn")
        .addEventListener("click", clearHistoryFilter);


    document
        .getElementById("chartPeriod")
        .addEventListener("change", renderStatistics);


    document
        .getElementById("editDate")
        .addEventListener("change", renderEditEntries);


    document
        .getElementById("adjustDate")
        .addEventListener("change", updateAdjustEntries);


    document
        .getElementById("adjustEntryId")
        .addEventListener("change", updateAdjustInfo);


    document
        .getElementById("addDate")
        .addEventListener("change", updateAddEntryInfo);


    document
        .getElementById("exportDataBtn")
        .addEventListener("click", exportData);


    document
        .getElementById("importDataBtn")
        .addEventListener("click", () => {

            document
                .getElementById("importDataInput")
                .click();

        });


    document
        .getElementById("importDataInput")
        .addEventListener("change", importData);


    document
        .getElementById("resetDataBtn")
        .addEventListener("click", resetApplication);


    document
        .querySelectorAll("[data-close-modal]")
        .forEach(button => {

            button.addEventListener("click", () => {

                closeModal(button.dataset.closeModal);

            });

        });


    document
        .querySelectorAll(".modal-overlay")
        .forEach(overlay => {

            overlay.addEventListener("click", event => {

                if (event.target === overlay) {

                    closeModal(overlay.id);

                }

            });

        });

}


/* =========================
   NAVIGATION
========================= */

function showSection(section) {

    document
        .querySelectorAll(".page-section")
        .forEach(element => {

            element.classList.toggle(
                "active",
                element.dataset.sectionContent === section
            );

        });


    document
        .querySelectorAll(".nav-item")
        .forEach(element => {

            element.classList.toggle(
                "active",
                element.dataset.section === section
            );

        });


    document
        .getElementById("sidebar")
        .classList.remove("open");


    if (section === "history") {
        renderHistory();
    }


    if (section === "statistics") {
        renderStatistics();
    }

}


/* =========================
   DATE HELPERS
========================= */

function pad(number) {

    return String(number).padStart(2, "0");

}


function getDateKey(date = new Date()) {

    const year = date.getFullYear();

    const month = pad(date.getMonth() + 1);

    const day = pad(date.getDate());

    return `${year}-${month}-${day}`;

}


function parseDateKey(value) {

    const [year, month, day] =
        value.split("-").map(Number);

    return new Date(
        year,
        month - 1,
        day,
        12,
        0,
        0
    );

}


function getTodayKey() {

    return getDateKey();

}


function getCreationDateKey() {

    return getDateKey(
        new Date(state.settings.createdAt)
    );

}


/*
    Se permite únicamente:

    - Hoy.
    - Ayer.
    - Nunca una fecha futura.
    - Nunca una fecha anterior
      a la creación de la aplicación.
*/
function isValidEntryDate(dateKey) {

    if (!dateKey) {
        return false;
    }

    const today = parseDateKey(getTodayKey());

    const yesterday = new Date(today);

    yesterday.setDate(
        yesterday.getDate() - 1
    );

    const selected =
        parseDateKey(dateKey);

    const created =
        parseDateKey(
            getCreationDateKey()
        );

    return (
        selected >= created
        &&
        selected >= yesterday
        &&
        selected <= today
    );

}


/*
    Compatible con:

    HH:MM
    HH:MM:SS
*/
function createDateTime(dateKey, time) {

    if (!dateKey || !time) {
        return null;
    }

    const parts =
        time.split(":").map(Number);

    const hours = parts[0] || 0;
    const minutes = parts[1] || 0;
    const seconds = parts[2] || 0;

    const [year, month, day] =
        dateKey.split("-").map(Number);

    return new Date(
        year,
        month - 1,
        day,
        hours,
        minutes,
        seconds,
        0
    );

}


function getWeekStart(date = new Date()) {

    const result = new Date(date);

    result.setHours(0, 0, 0, 0);

    const day =
        result.getDay() || 7;

    result.setDate(
        result.getDate() - day + 1
    );

    return result;

}


function getWeekEnd(date = new Date()) {

    const result = getWeekStart(date);

    result.setDate(
        result.getDate() + 6
    );

    result.setHours(
        23,
        59,
        59,
        999
    );

    return result;

}


/* =========================
   ENTRY HELPERS
========================= */

function getOpenEntry() {

    return state.entries.find(
        entry => !entry.end
    );

}


function getEntryStartDateTime(entry) {

    return createDateTime(
        entry.date,
        entry.start
    );

}


function getEntryEndDateTime(entry) {

    if (!entry.end) {

        return new Date();

    }

    const start =
        getEntryStartDateTime(entry);

    const end =
        createDateTime(
            entry.date,
            entry.end
        );


    /*
        Solo añadimos un día cuando
        la salida es realmente anterior
        a la entrada.

        IMPORTANTE:
        end === start NO suma 24 horas.
    */
    if (end < start) {

        end.setDate(
            end.getDate() + 1
        );

    }

    return end;

}


function getGrossMinutes(entry) {

    const start =
        getEntryStartDateTime(entry);

    const end =
        getEntryEndDateTime(entry);

    if (!start || !end) {
        return 0;
    }

    return Math.max(
        0,
        Math.floor(
            (end - start) / 60000
        )
    );

}


function getEffectiveMinutes(entry) {

    const gross =
        getGrossMinutes(entry);

    const adjustment =
        Number(
            entry.adjustmentMinutes || 0
        );

    return Math.max(
        0,
        gross + adjustment
    );

}


function getEntriesForDate(date) {

    return state.entries.filter(
        entry => entry.date === date
    );

}


function getDayMinutes(date) {

    return getEntriesForDate(date)
        .reduce(
            (total, entry) =>
                total + getEffectiveMinutes(entry),
            0
        );

}


function getTotalMinutes(
    entries = state.entries
) {

    return entries.reduce(
        (total, entry) =>
            total + getEffectiveMinutes(entry),
        0
    );

}


/* =========================
   TIME DISPLAY HELPERS
========================= */

function formatEntryTime(time) {

    if (!time) {
        return "—";
    }

    return time.length >= 5
        ? time.slice(0, 5)
        : time;

}


/* =========================
   FORMATTING
========================= */

function formatDuration(minutes) {

    const safeMinutes =
        Math.max(
            0,
            Math.floor(minutes || 0)
        );

    const hours =
        Math.floor(safeMinutes / 60);

    const mins =
        safeMinutes % 60;

    return `${hours}h ${pad(mins)}m`;

}


function formatDurationWithSeconds(seconds) {

    seconds =
        Math.max(
            0,
            Math.floor(seconds)
        );

    const hours =
        Math.floor(seconds / 3600);

    const minutes =
        Math.floor(
            (seconds % 3600) / 60
        );

    const secs =
        seconds % 60;

    return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;

}


function formatDate(dateKey) {

    const locale =
        state.settings.language === "en"
            ? "en-GB"
            : "es-ES";

    return parseDateKey(dateKey)
        .toLocaleDateString(
            locale,
            {
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        );

}


function formatShortDate(dateKey) {

    const locale =
        state.settings.language === "en"
            ? "en-GB"
            : "es-ES";

    return parseDateKey(dateKey)
        .toLocaleDateString(
            locale,
            {
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
            }
        );

}


function formatAdjustment(minutes) {

    if (!minutes) {
        return "0m";
    }

    const sign =
        minutes > 0
            ? "+"
            : "−";

    return sign + formatDuration(
        Math.abs(minutes)
    );

}


/* =========================
   CLOCK
========================= */

function updateClock() {

    const now = new Date();

    const locale =
        state.settings.language === "en"
            ? "en-GB"
            : "es-ES";

    document
        .getElementById("currentDate")
        .textContent =
            now.toLocaleDateString(
                locale,
                {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                }
            );


    document
        .getElementById("currentTime")
        .textContent =
            now.toLocaleTimeString(
                locale,
                {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                }
            );

}


/* =========================
   GREETING
========================= */

function updateGreeting() {

    const hour =
        new Date().getHours();

    let greeting;

    if (state.settings.language === "en") {

        if (hour < 12) {
            greeting = "Good morning";
        } else if (hour < 19) {
            greeting = "Good afternoon";
        } else {
            greeting = "Good evening";
        }

    } else {

        if (hour < 12) {
            greeting = "Buenos días";
        } else if (hour < 20) {
            greeting = "Buenas tardes";
        } else {
            greeting = "Buenas noches";
        }

    }

    document
        .getElementById("dynamicGreeting")
        .textContent = greeting;

}


/* =========================
   CLOCK IN / OUT
========================= */

function clockIn() {

    if (getOpenEntry()) {
        return;
    }

    const now = new Date();

    const entry = {

        id:
            crypto.randomUUID
                ? crypto.randomUUID()
                : String(Date.now()),

        date: getDateKey(now),

        /*
            Guardamos segundos reales.
            Ejemplo: 10:30:45
        */
        start:
            `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`,

        end: null,

        adjustmentMinutes: 0,

        createdAt: now.toISOString(),

        updatedAt: now.toISOString()

    };

    state.entries.push(entry);

    saveState();

    refreshApplication();

    startLiveTimer();

    showToast(
        t("clockInSuccess"),
        "success"
    );

}


function clockOut() {

    const entry =
        getOpenEntry();

    if (!entry) {
        return;
    }

    const now = new Date();

    /*
        Guardamos segundos reales.
    */
    entry.end =
        `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

    entry.updatedAt =
        now.toISOString();

    saveState();

    refreshApplication();

    stopLiveTimer();

    document
        .getElementById("liveCounter")
        .textContent = "00:00:00";

    showToast(
        t("clockOutSuccess"),
        "success"
    );

}


/* =========================
   LIVE TIMER
========================= */

function startLiveTimer() {

    stopLiveTimer();

    updateLiveTimer();

    timerInterval =
        setInterval(
            updateLiveTimer,
            1000
        );

}


function stopLiveTimer() {

    if (timerInterval) {

        clearInterval(timerInterval);

        timerInterval = null;

    }

}


function updateLiveTimer() {

    const entry =
        getOpenEntry();

    const counter =
        document.getElementById(
            "liveCounter"
        );


    if (!entry) {

        counter.textContent =
            "00:00:00";

        updateWorkStatus();

        return;

    }


    const start =
        getEntryStartDateTime(entry);


    const seconds =
        Math.max(
            0,
            Math.floor(
                (
                    Date.now()
                    -
                    start.getTime()
                )
                / 1000
            )
        );


    counter.textContent =
        formatDurationWithSeconds(
            seconds
        );


    updateWorkStatus();

    updateDashboardStats();

}


/* =========================
   STATUS
========================= */

function updateWorkStatus() {

    const entry =
        getOpenEntry();

    const title =
        document.getElementById(
            "workStatusTitle"
        );

    const text =
        document.getElementById(
            "workStatusText"
        );

    const indicator =
        document.getElementById(
            "workStatusIndicator"
        );

    const info =
        document.getElementById(
            "currentEntryInfo"
        );

    const clockInButton =
        document.getElementById(
            "clockInBtn"
        );

    const clockOutButton =
        document.getElementById(
            "clockOutBtn"
        );


    if (entry) {

        title.textContent =
            t("working");

        text.textContent =
            t("active");

        indicator.className =
            "work-status-indicator active";

        info.textContent =
            `${t("openSession")}: ${formatEntryTime(entry.start)}`;

        clockInButton.disabled = true;

        clockOutButton.disabled = false;

    } else {

        title.textContent =
            t("notWorking");

        text.textContent =
            t("inactive");

        indicator.className =
            "work-status-indicator inactive";

        info.textContent =
            t("notStarted");

        clockInButton.disabled = false;

        clockOutButton.disabled = true;

    }

}


/* =========================
   DASHBOARD
========================= */

function updateDashboardStats() {

    const today =
        getTodayKey();

    const todayDate =
        new Date();

    const weekStart =
        getWeekStart(todayDate);

    const weekEnd =
        getWeekEnd(todayDate);

    const todayMinutes =
        getDayMinutes(today);

    let weekMinutes = 0;

    let monthMinutes = 0;


    state.entries.forEach(entry => {

        const date =
            parseDateKey(entry.date);

        const minutes =
            getEffectiveMinutes(entry);


        if (
            date >= weekStart
            &&
            date <= weekEnd
        ) {

            weekMinutes += minutes;

        }


        if (
            date.getMonth()
                === todayDate.getMonth()
            &&
            date.getFullYear()
                === todayDate.getFullYear()
        ) {

            monthMinutes += minutes;

        }

    });


    document
        .getElementById("todayHours")
        .textContent =
            formatDuration(todayMinutes);


    document
        .getElementById("weekHours")
        .textContent =
            formatDuration(weekMinutes);


    document
        .getElementById("monthHours")
        .textContent =
            formatDuration(monthMinutes);


    document
        .getElementById("totalHours")
        .textContent =
            formatDuration(
                getTotalMinutes()
            );

}


/* =========================
   RECENT ENTRIES
========================= */

function renderRecentEntries() {

    const container =
        document.getElementById(
            "recentEntriesContainer"
        );


    const entries =
        [...state.entries]
            .sort((a, b) => {

                return new Date(
                    b.updatedAt || b.createdAt
                )
                -
                new Date(
                    a.updatedAt || a.createdAt
                );

            })
            .slice(0, 5);


    if (!entries.length) {

        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">◷</div>
                <h3>${escapeHTML(t("noEntries"))}</h3>
                <p>${escapeHTML(t("noEntriesDescription"))}</p>
            </div>
        `;

        return;

    }


    container.innerHTML =
        entries.map(entry => {

            const end =
                entry.end
                    ? formatEntryTime(entry.end)
                    : "…";

            return `
                <div class="recent-entry">

                    <div class="recent-entry-icon">
                        ◷
                    </div>

                    <div class="recent-entry-info">

                        <strong>
                            ${formatShortDate(entry.date)}
                        </strong>

                        <span>
                            ${formatEntryTime(entry.start)} → ${end}
                        </span>

                    </div>

                    <div class="recent-entry-duration">
                        ${formatDuration(
                            getEffectiveMinutes(entry)
                        )}
                    </div>

                </div>
            `;

        })
        .join("");

}


/* =========================
   HISTORY FILTER
========================= */

function getFilteredEntries() {

    const period =
        document
            .getElementById(
                "historyPeriodFilter"
            )
            .value;

    const today =
        new Date();

    const todayKey =
        getTodayKey();


    return state.entries.filter(entry => {

        const entryDate =
            parseDateKey(entry.date);


        if (period === "all") {
            return true;
        }


        if (period === "today") {
            return entry.date === todayKey;
        }


        if (period === "week") {

            return (
                entryDate >= getWeekStart(today)
                &&
                entryDate <= getWeekEnd(today)
            );

        }


        if (period === "month") {

            return (
                entryDate.getMonth()
                    === today.getMonth()
                &&
                entryDate.getFullYear()
                    === today.getFullYear()
            );

        }


        if (period === "year") {

            return (
                entryDate.getFullYear()
                    === today.getFullYear()
            );

        }


        if (period === "custom") {

            const from =
                document
                    .getElementById(
                        "historyFromDate"
                    )
                    .value;

            const to =
                document
                    .getElementById(
                        "historyToDate"
                    )
                    .value;


            if (from && entry.date < from) {
                return false;
            }


            if (to && entry.date > to) {
                return false;
            }

        }

        return true;

    });

}


function clearHistoryFilter() {

    document
        .getElementById(
            "historyPeriodFilter"
        )
        .value = "all";


    document
        .getElementById(
            "historyFromDate"
        )
        .value = "";


    document
        .getElementById(
            "historyToDate"
        )
        .value = "";


    document
        .getElementById(
            "historyCustomDates"
        )
        .classList.add("hidden");


    renderHistory();

}


/* =========================
   HISTORY
========================= */

function renderHistory() {

    const entries =
        getFilteredEntries();

    const container =
        document.getElementById(
            "historyContainer"
        );

    const grouped =
        groupEntriesByDate(entries);

    const dates =
        Object.keys(grouped)
            .sort((a, b) =>
                b.localeCompare(a)
            );


    updateHistorySummary(
        grouped
    );


    if (!dates.length) {

        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">▤</div>
                <h3>${escapeHTML(t("noHistory"))}</h3>
                <p>${escapeHTML(t("noHistoryDescription"))}</p>
            </div>
        `;

        return;

    }


    container.innerHTML =
        dates.map(date => {

            const dayEntries =
                grouped[date];

            const dayMinutes =
                dayEntries.reduce(
                    (total, entry) =>
                        total
                        +
                        getEffectiveMinutes(entry),
                    0
                );


            return `
                <article class="history-day">

                    <div class="history-day-header">

                        <div class="history-day-title">

                            <strong>
                                ${formatDate(date)}
                            </strong>

                            <span>
                                ${dayEntries.length} fichaje(s)
                            </span>

                        </div>

                        <div class="history-day-total">
                            ${formatDuration(dayMinutes)}
                        </div>

                    </div>

                    <div class="history-day-body">

                        ${dayEntries
                            .sort((a, b) =>
                                a.start.localeCompare(
                                    b.start
                                )
                            )
                            .map(entry => {

                                return `
                                    <div class="history-entry">

                                        <div class="history-entry-time">

                                            ${formatEntryTime(entry.start)}

                                            <span>→</span>

                                            ${
                                                entry.end
                                                    ? formatEntryTime(entry.end)
                                                    : "…"
                                            }

                                            ${
                                                !entry.end
                                                    ? `<span>(${escapeHTML(t("active"))})</span>`
                                                    : ""
                                            }

                                        </div>

                                        <div class="history-entry-duration">

                                            ${formatDuration(
                                                getEffectiveMinutes(entry)
                                            )}

                                        </div>

                                        <div class="history-entry-actions">

                                            <button
                                                class="small-action"
                                                type="button"
                                                onclick="openEditEntryById('${entry.id}')"
                                                title="${escapeHTML(t("edit"))}"
                                            >
                                                ✎
                                            </button>

                                            <button
                                                class="small-action delete"
                                                type="button"
                                                onclick="deleteEntry('${entry.id}')"
                                                title="${escapeHTML(t("delete"))}"
                                            >
                                                ×
                                            </button>

                                        </div>

                                    </div>
                                `;

                            })
                            .join("")
                        }

                    </div>

                </article>
            `;

        })
        .join("");

}


function updateHistorySummary(grouped) {

    const dates =
        Object.keys(grouped);

    const dayMinutes =
        dates
            .map(date =>
                grouped[date].reduce(
                    (total, entry) =>
                        total
                        +
                        getEffectiveMinutes(entry),
                    0
                )
            )
            .filter(minutes => minutes > 0);


    const daysWorked =
        dayMinutes.length;


    const total =
        dayMinutes.reduce(
            (sum, minutes) =>
                sum + minutes,
            0
        );


    const average =
        daysWorked
            ? total / daysWorked
            : 0;


    document
        .getElementById(
            "historyDaysCount"
        )
        .textContent =
            daysWorked;


    document
        .getElementById(
            "historyTotalHours"
        )
        .textContent =
            formatDuration(total);


    document
        .getElementById(
            "historyAverageHours"
        )
        .textContent =
            formatDuration(average);

}


function groupEntriesByDate(entries) {

    return entries.reduce(
        (groups, entry) => {

            groups[entry.date] ||= [];

            groups[entry.date]
                .push(entry);

            return groups;

        },
        {}
    );

}


/* =========================
   ADD ENTRY
========================= */

function openAddEntryModal() {

    const dateInput =
        document.getElementById(
            "addDate"
        );

    dateInput.min =
        getCreationDateKey();

    dateInput.max =
        getTodayKey();

    dateInput.value =
        getTodayKey();


    document
        .getElementById(
            "addStartTime"
        )
        .value = "";


    document
        .getElementById(
            "addEndTime"
        )
        .value = "";


    updateAddEntryInfo();

    openModal("addEntryModal");

}


function updateAddEntryInfo() {

    const date =
        document
            .getElementById(
                "addDate"
            )
            .value;

    const box =
        document
            .getElementById(
                "addEntryExistingInfo"
            );


    if (!date) {

        box.classList.add("hidden");

        return;

    }


    const entries =
        getEntriesForDate(date);


    if (entries.length) {

        box.textContent =
            `${entries.length} fichaje(s) registrado(s) este día. El nuevo periodo se añadirá sin modificar los existentes.`;

        box.classList.remove("hidden");

    } else {

        box.textContent =
            "Este día no tiene fichajes. Introduce la hora de Entrada y Salida.";

        box.classList.remove("hidden");

    }

}


function addManualEntry(event) {

    event.preventDefault();

    const date =
        document
            .getElementById(
                "addDate"
            )
            .value;

    const start =
        document
            .getElementById(
                "addStartTime"
            )
            .value;

    const end =
        document
            .getElementById(
                "addEndTime"
            )
            .value;


    if (!isValidEntryDate(date)) {

        showToast(
            t("invalidDate"),
            "error"
        );

        return;

    }


    if (!start || !end) {

        showToast(
            t("invalidTime"),
            "error"
        );

        return;

    }


    const now =
        new Date().toISOString();


    state.entries.push({

        id:
            crypto.randomUUID
                ? crypto.randomUUID()
                : String(Date.now()),

        date,

        start,

        end,

        adjustmentMinutes: 0,

        createdAt: now,

        updatedAt: now

    });


    saveState();

    closeModal("addEntryModal");

    refreshApplication();

    showToast(
        t("entryAdded"),
        "success"
    );

}


/* =========================
   EDIT ENTRIES
========================= */

function openEditEntryModal() {

    const dates =
        [...new Set(
            state.entries.map(
                entry => entry.date
            )
        )]
        .sort((a, b) =>
            b.localeCompare(a)
        );


    const select =
        document.getElementById(
            "editDate"
        );


    if (!dates.length) {

        select.innerHTML =
            `<option value="">${escapeHTML(t("noEntriesToEdit"))}</option>`;

        document
            .getElementById(
                "editEntriesList"
            )
            .innerHTML =
                `<div class="empty-state">
                    <div class="empty-state-icon">✎</div>
                    <h3>${escapeHTML(t("noEntriesToEdit"))}</h3>
                </div>`;

        openModal("editEntryModal");

        return;

    }


    select.innerHTML =
        dates.map(date => `
            <option value="${date}">
                ${formatDate(date)}
            </option>
        `)
        .join("");


    renderEditEntries();

    openModal("editEntryModal");

}


function renderEditEntries() {

    const date =
        document
            .getElementById(
                "editDate"
            )
            .value;


    const entries =
        getEntriesForDate(date)
            .sort((a, b) =>
                a.start.localeCompare(
                    b.start
                )
            );


    const container =
        document
            .getElementById(
                "editEntriesList"
            );


    if (!entries.length) {

        container.innerHTML =
            `<div class="empty-state">
                <h3>${escapeHTML(t("noEntriesToEdit"))}</h3>
            </div>`;

        return;

    }


    container.innerHTML =
        entries.map(entry => {

            return `
                <div class="edit-entry-card">

                    <form
                        onsubmit="saveEditedEntry(event, '${entry.id}')"
                    >

                        <div class="form-group">

                            <label>
                                ${escapeHTML(t("clockIn"))}
                            </label>

                            <input
                                id="edit-start-${entry.id}"
                                class="form-control"
                                type="time"
                                value="${formatEntryTime(entry.start)}"
                                required
                            >

                        </div>


                        <div class="form-group">

                            <label>
                                ${escapeHTML(t("clockOut"))}
                            </label>

                            <input
                                id="edit-end-${entry.id}"
                                class="form-control"
                                type="time"
                                value="${entry.end ? formatEntryTime(entry.end) : ""}"
                                ${entry.end ? "required" : ""}
                            >

                        </div>


                        <button
                            class="primary-button"
                            type="submit"
                        >
                            ${escapeHTML(t("save"))}
                        </button>


                        <button
                            class="danger-button"
                            type="button"
                            onclick="deleteEntry('${entry.id}')"
                        >
                            ×
                        </button>

                    </form>

                </div>
            `;

        })
        .join("");

}


function openEditEntryById(id) {

    const entry =
        state.entries.find(
            item => item.id === id
        );

    if (!entry) {
        return;
    }

    openEditEntryModal();

    document
        .getElementById(
            "editDate"
        )
        .value =
            entry.date;

    renderEditEntries();

}


function saveEditedEntry(event, id) {

    event.preventDefault();

    const entry =
        state.entries.find(
            item => item.id === id
        );

    if (!entry) {
        return;
    }


    const start =
        document
            .getElementById(
                `edit-start-${id}`
            )
            .value;


    const end =
        document
            .getElementById(
                `edit-end-${id}`
            )
            .value;


    if (!start) {

        showToast(
            t("invalidTime"),
            "error"
        );

        return;

    }


    entry.start = start;

    entry.end = end || null;

    entry.updatedAt =
        new Date().toISOString();


    saveState();

    refreshApplication();

    renderEditEntries();

    showToast(
        t("entryUpdated"),
        "success"
    );

}


/* =========================
   DELETE
========================= */

function deleteEntry(id) {

    if (!confirm(t("confirmDelete"))) {
        return;
    }

    state.entries =
        state.entries.filter(
            entry => entry.id !== id
        );

    saveState();

    refreshApplication();

    renderEditEntries();

    closeModal("adjustTimeModal");

    showToast(
        t("entryDeleted"),
        "success"
    );

}


/* =========================
   ADJUST TIME
========================= */

function openAdjustTimeModal() {

    const dates =
        [...new Set(
            state.entries.map(
                entry => entry.date
            )
        )]
        .sort((a, b) =>
            b.localeCompare(a)
        );


    const select =
        document
            .getElementById(
                "adjustDate"
            );


    select.innerHTML =
        `<option value="">${escapeHTML(t("selectDay"))}</option>`
        +
        dates.map(date => `
            <option value="${date}">
                ${formatDate(date)}
            </option>
        `)
        .join("");


    document
        .getElementById(
            "adjustEntrySelector"
        )
        .classList.add("hidden");


    document
        .getElementById(
            "adjustCurrentInfo"
        )
        .classList.add("hidden");


    document
        .getElementById(
            "adjustHours"
        )
        .value = 0;


    document
        .getElementById(
            "adjustMinutes"
        )
        .value = 0;


    openModal("adjustTimeModal");

}


function updateAdjustEntries() {

    const date =
        document
            .getElementById(
                "adjustDate"
            )
            .value;


    const entries =
        getEntriesForDate(date);


    const selector =
        document
            .getElementById(
                "adjustEntrySelector"
            );


    const select =
        document
            .getElementById(
                "adjustEntryId"
            );


    document
        .getElementById(
            "adjustCurrentInfo"
        )
        .classList.add("hidden");


    if (!entries.length) {

        selector.classList.add("hidden");

        return;

    }


    selector.classList.remove("hidden");


    select.innerHTML =
        `<option value="">${escapeHTML(t("selectEntry"))}</option>`
        +
        entries.map(entry => `
            <option value="${entry.id}">
                ${formatEntryTime(entry.start)} → ${entry.end ? formatEntryTime(entry.end) : "…"}
            </option>
        `)
        .join("");

}


function updateAdjustInfo() {

    const id =
        document
            .getElementById(
                "adjustEntryId"
            )
            .value;


    const entry =
        state.entries.find(
            item => item.id === id
        );


    const info =
        document
            .getElementById(
                "adjustCurrentInfo"
            );


    if (!entry) {

        info.classList.add("hidden");

        return;

    }


    info.classList.remove("hidden");


    document
        .getElementById(
            "adjustGrossTime"
        )
        .textContent =
            formatDuration(
                getGrossMinutes(entry)
            );


    document
        .getElementById(
            "adjustCurrentValue"
        )
        .textContent =
            formatAdjustment(
                Number(
                    entry.adjustmentMinutes || 0
                )
            );


    document
        .getElementById(
            "adjustEffectiveTime"
        )
        .textContent =
            formatDuration(
                getEffectiveMinutes(entry)
            );

}


function saveAdjustment(event) {

    event.preventDefault();


    const id =
        document
            .getElementById(
                "adjustEntryId"
            )
            .value;


    const entry =
        state.entries.find(
            item => item.id === id
        );


    if (!entry) {
        return;
    }


    const hours =
        Math.max(
            0,
            Number(
                document
                    .getElementById(
                        "adjustHours"
                    )
                    .value
            ) || 0
        );


    const minutes =
        Math.min(
            59,
            Math.max(
                0,
                Number(
                    document
                        .getElementById(
                            "adjustMinutes"
                        )
                        .value
                ) || 0
            )
        );


    const direction =
        document
            .querySelector(
                "input[name='adjustDirection']:checked"
            )
            .value;


    const amount =
        Math.floor(hours * 60 + minutes);


    if (!amount) {
        return;
    }


    const signedAmount =
        direction === "add"
            ? amount
            : -amount;


    const current =
        Number(
            entry.adjustmentMinutes || 0
        );


    const newAdjustment =
        current + signedAmount;


    entry.adjustmentMinutes =
        Math.max(
            -getGrossMinutes(entry),
            newAdjustment
        );


    entry.updatedAt =
        new Date().toISOString();


    saveState();

    closeModal("adjustTimeModal");

    refreshApplication();

    showToast(
        t("adjustmentSaved"),
        "success"
    );

}


/* =========================
   STATISTICS
========================= */

function getDailyData() {

    const grouped =
        groupEntriesByDate(
            state.entries
        );


    return Object
        .keys(grouped)
        .sort()
        .map(date => {

            const minutes =
                grouped[date].reduce(
                    (total, entry) =>
                        total
                        +
                        getEffectiveMinutes(entry),
                    0
                );

            return {
                date,
                minutes
            };

        })
        .filter(
            item => item.minutes > 0
        );

}


function renderStatistics() {

    const dailyData =
        getDailyData();


    const total =
        dailyData.reduce(
            (sum, item) =>
                sum + item.minutes,
            0
        );


    const days =
        dailyData.length;


    const average =
        days
            ? total / days
            : 0;


    document
        .getElementById(
            "statisticsTotalHours"
        )
        .textContent =
            formatDuration(total);


    document
        .getElementById(
            "statisticsTotalDays"
        )
        .textContent =
            `${days} ${t("days")}`;


    document
        .getElementById(
            "statisticsDailyAverage"
        )
        .textContent =
            formatDuration(average);


    if (dailyData.length) {

        const best =
            [...dailyData]
                .sort(
                    (a, b) =>
                        b.minutes - a.minutes
                )[0];


        const worst =
            [...dailyData]
                .sort(
                    (a, b) =>
                        a.minutes - b.minutes
                )[0];


        document
            .getElementById(
                "statisticsBestDay"
            )
            .textContent =
                formatShortDate(best.date);


        document
            .getElementById(
                "statisticsBestDayHours"
            )
            .textContent =
                formatDuration(best.minutes);


        document
            .getElementById(
                "statisticsWorstDay"
            )
            .textContent =
                formatShortDate(worst.date);


        document
            .getElementById(
                "statisticsWorstDayHours"
            )
            .textContent =
                formatDuration(worst.minutes);

    } else {

        [
            "statisticsBestDay",
            "statisticsBestDayHours",
            "statisticsWorstDay",
            "statisticsWorstDayHours"
        ]
        .forEach(id => {

            document
                .getElementById(id)
                .textContent = "—";

        });

    }


    renderChart(dailyData);

    renderBreakdown(dailyData);

}


function renderChart(data) {

    const container =
        document.getElementById(
            "hoursChart"
        );

    const period =
        document
            .getElementById(
                "chartPeriod"
            )
            .value;

    const now =
        new Date();


    let filtered =
        [...data];


    if (period === "week") {

        const start =
            getWeekStart(now);

        const end =
            getWeekEnd(now);

        filtered =
            filtered.filter(item => {

                const date =
                    parseDateKey(item.date);

                return (
                    date >= start
                    &&
                    date <= end
                );

            });

    }


    if (period === "month") {

        filtered =
            filtered.filter(item => {

                const date =
                    parseDateKey(item.date);

                return (
                    date.getMonth()
                        === now.getMonth()
                    &&
                    date.getFullYear()
                        === now.getFullYear()
                );

            });

    }


    if (!filtered.length) {

        container.innerHTML =
            `<div class="empty-state">
                <p>${escapeHTML(t("noHistory"))}</p>
            </div>`;

        return;

    }


    const max =
        Math.max(
            ...filtered.map(
                item => item.minutes
            )
        );


    container.innerHTML =
        filtered.map(item => {

            const percentage =
                max
                    ? Math.max(
                        3,
                        item.minutes / max * 100
                    )
                    : 0;


            return `
                <div class="chart-bar-wrapper">

                    <span class="chart-value">
                        ${formatDuration(item.minutes)}
                    </span>

                    <div
                        class="chart-bar"
                        style="height:${percentage}%"
                    ></div>

                    <span class="chart-label">
                        ${formatShortDate(item.date)}
                    </span>

                </div>
            `;

        })
        .join("");

}


function renderBreakdown(data) {

    const container =
        document.getElementById(
            "statisticsBreakdown"
        );


    if (!data.length) {

        container.innerHTML =
            `<div class="empty-state">
                <p>${escapeHTML(t("noHistory"))}</p>
            </div>`;

        return;

    }


    const max =
        Math.max(
            ...data.map(
                item => item.minutes
            )
        );


    container.innerHTML =
        [...data]
            .sort((a, b) =>
                b.date.localeCompare(a.date)
            )
            .map(item => {

                const percentage =
                    max
                        ? item.minutes / max * 100
                        : 0;


                return `
                    <div class="breakdown-row">

                        <span>
                            ${formatShortDate(item.date)}
                        </span>

                        <div class="breakdown-progress">

                            <span
                                style="width:${percentage}%"
                            ></span>

                        </div>

                        <strong class="breakdown-hours">
                            ${formatDuration(item.minutes)}
                        </strong>

                    </div>
                `;

            })
            .join("");

}


/* =========================
   USERNAME
========================= */

function saveUsername(event) {

    event.preventDefault();

    const input =
        document
            .getElementById(
                "usernameInput"
            );


    const username =
        input.value.trim();


    if (!username) {
        return;
    }


    state.settings.username =
        username;


    saveState();

    closeModal("usernameModal");

    refreshApplication();

    showToast(
        t("usernameUpdated"),
        "success"
    );

}


/* =========================
   SETTINGS
========================= */

function applySettings() {

    document.body.classList.toggle(
        "dark-theme",
        state.settings.theme === "dark"
    );


    document
        .getElementById(
            "darkModeSwitch"
        )
        .checked =
            state.settings.theme === "dark";


    document
        .getElementById(
            "themeToggleBtn"
        )
        .textContent =
            state.settings.theme === "dark"
                ? "☾"
                : "☀";


    document
        .getElementById(
            "languageToggleBtn"
        )
        .textContent =
            state.settings.language.toUpperCase();


    document
        .getElementById(
            "settingsLanguage"
        )
        .value =
            state.settings.language;

}


function toggleTheme() {

    state.settings.theme =
        state.settings.theme === "dark"
            ? "light"
            : "dark";

    saveState();

    applySettings();

}


function toggleLanguage() {

    state.settings.language =
        state.settings.language === "es"
            ? "en"
            : "es";

    saveState();

    refreshApplication();

}


/* =========================
   TRANSLATION
========================= */

function t(key) {

    return (
        translations[
            state.settings.language
        ][key]
        ||
        translations.es[key]
        ||
        key
    );

}


function translatePage() {

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;

            if (
                translations[
                    state.settings.language
                ][key]
            ) {

                element.textContent =
                    t(key);

            }

        });

}


/* =========================
   PROFILE
========================= */

function updateProfile() {

    const username =
        state.settings.username
        || "Usuario";

    const initial =
        username.charAt(0)
            .toUpperCase();


    document
        .getElementById(
            "sidebarUsername"
        )
        .textContent =
            username;


    document
        .getElementById(
            "welcomeUsername"
        )
        .textContent =
            username;


    document
        .getElementById(
            "settingsUsername"
        )
        .textContent =
            username;


    document
        .getElementById(
            "sidebarAvatar"
        )
        .textContent =
            initial;


    document
        .getElementById(
            "topbarAvatar"
        )
        .textContent =
            initial;

}


/* =========================
   MODALS
========================= */

function openModal(id) {

    document
        .getElementById(id)
        .classList.add("open");

}


function closeModal(id) {

    document
        .getElementById(id)
        .classList.remove("open");

}


/* =========================
   EXPORT
========================= */

function exportData() {

    if (!state.entries.length) {

        showToast(
            t("noDataToExport"),
            "error"
        );

        return;

    }


    const data =
        JSON.stringify(
            state,
            null,
            2
        );


    const blob =
        new Blob(
            [data],
            {
                type: "application/json"
            }
        );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");


    link.href = url;

    link.download =
        `worktracker-${getTodayKey()}.json`;


    link.click();

    URL.revokeObjectURL(url);

}


/* =========================
   IMPORT
========================= */

function importData(event) {

    const file =
        event.target.files[0];

    if (!file) {
        return;
    }


    const reader =
        new FileReader();


    reader.onload = loadEvent => {

        try {

            const imported =
                JSON.parse(
                    loadEvent.target.result
                );


            if (
                !imported
                ||
                !Array.isArray(
                    imported.entries
                )
            ) {

                throw new Error();

            }


            state = imported;

            state.settings ||= {};

            state.settings.language ||= "es";
            state.settings.theme ||= "dark";
            state.settings.createdAt ||= new Date().toISOString();


            saveState();

            applySettings();

            refreshApplication();

            showToast(
                t("importSuccess"),
                "success"
            );

        } catch (error) {

            showToast(
                t("importError"),
                "error"
            );

        }

    };


    reader.readAsText(file);

    event.target.value = "";

}


/* =========================
   RESET
========================= */

function resetApplication() {

    if (!confirm(t("confirmReset"))) {
        return;
    }


    localStorage.removeItem(
        STORAGE_KEY
    );


    state =
        getDefaultState();


    saveState();

    applySettings();

    refreshApplication();

    openModal("usernameModal");

}


/* =========================
   TOAST
========================= */

function showToast(
    message,
    type = "success"
) {

    const container =
        document.getElementById(
            "toastContainer"
        );


    const toast =
        document.createElement("div");


    toast.className =
        `toast ${type}`;


    toast.textContent =
        message;


    container.appendChild(
        toast
    );


    setTimeout(() => {

        toast.remove();

    }, 3500);

}


/* =========================
   REFRESH
========================= */

function refreshApplication() {

    translatePage();

    applySettings();

    updateProfile();

    updateGreeting();

    updateClock();

    updateWorkStatus();

    updateDashboardStats();

    renderRecentEntries();

    renderHistory();

    renderStatistics();

}


/* =========================
   SECURITY
========================= */

function escapeHTML(value) {

    const div =
        document.createElement("div");

    div.textContent =
        String(value);

    return div.innerHTML;

}
