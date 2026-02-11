/**
 * Macao AI Travel Planner - Interactive Demo
 * Light Theme Version with Draggable Timeline
 */

// ========================================
// Language Translations
// ========================================

const translations = {
    zh: {
        appName: "澳门AI旅游规划",
        tabOverview: "概览",
        tabEvents: "活动",
        tabBudget: "预算",
        tabRoutes: "路线",
        tabAttractions: "景点",
        tabRestaurants: "餐厅",
        myTrip: "我的行程",
        attractions: "景点",
        walking: "步行",
        duration: "时长",
        budgetSummary: "预算概览",
        budgetTracker: "智能预算追踪",
        used: "已使用",
        spendingBreakdown: "支出明细",
        food: "餐饮",
        tickets: "门票",
        transport: "交通",
        shopping: "购物",
        dailyForecast: "今日预计支出",
        recommendedRoutes: "推荐路线",
        dragToTimeline: "拖动路线到时间轴添加",
        historicRoute: "历史城区精华游",
        taipaRoute: "氹仔美食文化游",
        cotaiRoute: "路氹城豪华游",
        natureRoute: "自然风光游",
        popularAttractions: "热门景点",
        aiAssistant: "AI智能助手",
        askPlaceholder: "输入您的问题...",
        timeline: "行程时间轴",
        timelineHint: "拖动调整位置，拖拽右侧边缘调整时长",
        ruins: "大三巴牌坊",
        macauTower: "澳门旅游塔",
        venetian: "威尼斯人",
        senadoSquare: "议事亭前地",
        welcomeMsgOverview: "您好！我是您的澳门旅游AI助手。当前在「概览」页面，我可以帮您查看行程概览信息。有什么可以帮您的吗？",
        welcomeMsgBudget: "您好！我是您的澳门旅游AI助手。当前在「预算」页面，我可以帮您分析预算使用情况，提供省钱建议。",
        welcomeMsgRoutes: "您好！我是您的澳门旅游AI助手。当前在「路线」页面，我可以帮您推荐最适合的游玩路线。",
        welcomeMsgAttractions: "您好！我是您的澳门旅游AI助手。当前在「景点」页面，我可以帮您介绍各个景点的详细信息。"
    },
    en: {
        appName: "Macao AI Planner",
        tabOverview: "Overview",
        tabEvents: "Events",
        tabBudget: "Budget",
        tabRoutes: "Routes",
        tabAttractions: "Spots",
        tabRestaurants: "Dining",
        myTrip: "My Trip",
        attractions: "Spots",
        walking: "Walking",
        duration: "Duration",
        budgetSummary: "Budget Summary",
        budgetTracker: "Smart Budget Tracker",
        used: "Used",
        spendingBreakdown: "Spending Breakdown",
        food: "Food",
        tickets: "Tickets",
        transport: "Transport",
        shopping: "Shopping",
        dailyForecast: "Today's Forecast",
        recommendedRoutes: "Recommended Routes",
        dragToTimeline: "Drag routes to timeline",
        historicRoute: "Historic Center Tour",
        taipaRoute: "Taipa Food & Culture",
        cotaiRoute: "Cotai Luxury Tour",
        natureRoute: "Nature & Scenery",
        popularAttractions: "Popular Attractions",
        aiAssistant: "AI Assistant",
        askPlaceholder: "Ask a question...",
        timeline: "Timeline",
        timelineHint: "Drag to reposition, resize from right edge",
        ruins: "Ruins of St. Paul's",
        macauTower: "Macau Tower",
        venetian: "The Venetian",
        senadoSquare: "Senado Square",
        welcomeMsgOverview: "Hello! I'm your Macao travel AI assistant. I'm on the Overview page. How can I help you?",
        welcomeMsgBudget: "Hello! I'm your Macao travel AI assistant. I'm on the Budget page. I can help analyze your spending.",
        welcomeMsgRoutes: "Hello! I'm your Macao travel AI assistant. I'm on the Routes page. I can recommend the best routes for you.",
        welcomeMsgAttractions: "Hello! I'm your Macao travel AI assistant. I'm on the Attractions page. Ask me about any attraction!"
    },
    pt: {
        appName: "Planejador IA Macau",
        tabOverview: "Visão Geral",
        tabEvents: "Eventos",
        tabBudget: "Orçamento",
        tabRoutes: "Rotas",
        tabAttractions: "Atrações",
        tabRestaurants: "Restaurantes",
        myTrip: "Minha Viagem",
        attractions: "Atrações",
        walking: "Caminhada",
        duration: "Duração",
        budgetSummary: "Resumo do Orçamento",
        budgetTracker: "Rastreador de Orçamento",
        used: "Usado",
        spendingBreakdown: "Detalhamento",
        food: "Comida",
        tickets: "Ingressos",
        transport: "Transporte",
        shopping: "Compras",
        dailyForecast: "Previsão de Hoje",
        recommendedRoutes: "Rotas Recomendadas",
        dragToTimeline: "Arraste rotas para a linha do tempo",
        historicRoute: "Tour Centro Histórico",
        taipaRoute: "Taipa Gastronomia",
        cotaiRoute: "Cotai Luxo",
        natureRoute: "Natureza",
        popularAttractions: "Atrações Populares",
        aiAssistant: "Assistente IA",
        askPlaceholder: "Faça uma pergunta...",
        timeline: "Linha do Tempo",
        timelineHint: "Arraste para reposicionar",
        ruins: "Ruínas de São Paulo",
        macauTower: "Torre de Macau",
        venetian: "The Venetian",
        senadoSquare: "Largo do Senado",
        welcomeMsgOverview: "Olá! Sou seu assistente de viagem. Estou na página Visão Geral. Como posso ajudar?",
        welcomeMsgBudget: "Olá! Sou seu assistente de viagem. Estou na página Orçamento. Posso ajudar a analisar seus gastos.",
        welcomeMsgRoutes: "Olá! Sou seu assistente de viagem. Estou na página Rotas. Posso recomendar as melhores rotas.",
        welcomeMsgAttractions: "Olá! Sou seu assistente de viagem. Estou na página Atrações. Pergunte sobre qualquer atração!"
    }
};

let currentLang = 'zh';
let currentTab = 'overview';

// ========================================
// Language Switcher
// ========================================

function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);
            
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) {
            if (el.tagName === 'INPUT') {
                el.value = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (t[key]) {
            el.placeholder = t[key];
        }
    });
    
    document.documentElement.lang = lang === 'zh' ? 'zh' : lang;
    
    // Update AI welcome message for current tab
    updateAIContext(currentTab);
}

// ========================================
// Tab Navigation
// ========================================

function initTabs() {
    const tabs = document.querySelectorAll('.nav-tab');
    const contents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            currentTab = tabName;
            
            // Update tab UI
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update content
            contents.forEach(c => c.classList.remove('active'));
            document.getElementById(`${tabName}-tab`).classList.add('active');
            
            // Update AI context
            updateAIContext(tabName);
        });
    });
}

function updateAIContext(tabName) {
    const contextLabel = document.getElementById('chat-context');
    const messagesContainer = document.getElementById('chat-messages');
    const t = translations[currentLang];
    
    // Update context label
    const contextMap = {
        overview: t.tabOverview,
        budget: t.tabBudget,
        routes: t.tabRoutes,
        attractions: t.tabAttractions
    };
    contextLabel.textContent = contextMap[tabName] || t.tabOverview;
    
    // Add welcome message for new context
    const welcomeKey = `welcomeMsg${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`;
    const welcomeMsg = t[welcomeKey] || t.welcomeMsgOverview;
    
    // Check if last message is already this welcome message
    const lastMsg = messagesContainer.lastElementChild;
    if (!lastMsg || !lastMsg.querySelector('p')?.textContent.includes(welcomeMsg.substring(0, 20))) {
        addAIMessage(welcomeMsg);
    }
}

// ========================================
// AI Chat
// ========================================

function initChat() {
    const input = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    
    const sendMessage = () => {
        const text = input.value.trim();
        if (!text) return;
        
        // Add user message
        addUserMessage(text);
        input.value = '';
        
        // Generate contextual response
        setTimeout(() => {
            const response = generateAIResponse(text, currentTab);
            addAIMessage(response);
        }, 800);
    };
    
    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
}

function addUserMessage(text) {
    const container = document.getElementById('chat-messages');
    const msg = document.createElement('div');
    msg.className = 'message user-message';
    msg.textContent = text;
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
}

function addAIMessage(text) {
    const container = document.getElementById('chat-messages');
    const msg = document.createElement('div');
    msg.className = 'message ai-message';
    msg.innerHTML = `<div class="message-bubble"><p>${text}</p></div>`;
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
}

function generateAIResponse(userMsg, tab) {
    const responses = {
        zh: {
            budget: {
                save: "建议您在官也街用餐，那里有很多平价美食。另外可以使用发财车（免费穿梭巴士）节省交通费。",
                food: "推荐尝试黄枝记云吞面（约MOP 50）、义顺牛奶公司（约MOP 40），既地道又实惠。",
                default: "根据您的预算使用情况，目前控制在合理范围内。需要我提供详细的省钱建议吗？"
            },
            routes: {
                recommend: "如果是第一次来澳门，强烈推荐「历史城区精华游」，可以一次看遍所有经典景点。",
                time: "历史城区路线约需4-5小时，氹仔路线约3-4小时。建议上午游览历史城区，下午去氹仔。",
                default: "您可以将推荐路线直接拖动到右侧时间轴，系统会自动规划时间和交通。"
            },
            attractions: {
                ruins: "大三巴牌坊是圣保禄大教堂遗址，澳门最著名的地标。建议早上9点前到达避开人群。",
                tower: "澳门塔高338米，有蹦极跳、空中漫步等项目。观景台门票约MOP 195。",
                venetian: "威尼斯人是集酒店、购物、娱乐于一体的综合度假村，室内运河和贡多拉船是亮点。",
                default: "您可以拖动景点卡片到时间轴添加。每个景点显示的时长可根据需要调整。"
            },
            overview: {
                weather: "今天澳门天气晴朗，气温22-26°C，非常适合户外活动。建议携带防晒用品。",
                plan: "您今天的行程包含8个景点，预计步行12公里。建议穿舒适的鞋子。",
                default: "我可以帮您查看预算、规划路线或推荐景点。请告诉我您想了解什么？"
            }
        },
        en: {
            budget: {
                save: "Try dining at Taipa Village for affordable local food. Use free casino shuttles to save on transport.",
                food: "Wong Chi Kei noodles (MOP 50) and Yee Shun milk pudding (MOP 40) are great budget options.",
                default: "Your budget usage looks healthy. Would you like money-saving tips?"
            },
            routes: {
                recommend: "For first-timers, the Historic Center route covers all the must-see spots.",
                time: "Historic route takes 4-5 hours, Taipa route 3-4 hours. Morning for historic, afternoon for Taipa.",
                default: "Drag recommended routes to the timeline on the right to auto-plan your day."
            },
            attractions: {
                ruins: "Ruins of St. Paul's is Macau's most famous landmark. Visit before 9am to avoid crowds.",
                tower: "Macau Tower is 338m tall with bungee jumping. Observatory ticket is about MOP 195.",
                venetian: "The Venetian features indoor canals and gondola rides. Great for shopping too.",
                default: "Drag attraction cards to the timeline. Duration can be adjusted as needed."
            },
            overview: {
                weather: "It's sunny today in Macau, 22-26°C. Perfect for outdoor activities!",
                plan: "You have 8 spots planned today with 12km walking. Wear comfortable shoes!",
                default: "I can help with budget, routes, or attractions. What would you like to know?"
            }
        },
        pt: {
            budget: {
                save: "Experimente jantar na Vila da Taipa. Use os shuttles gratuitos dos cassinos.",
                food: "Wong Chi Kei (MOP 50) e Yee Shun (MOP 40) são boas opções econômicas.",
                default: "Seu uso de orçamento parece bom. Quer dicas para economizar?"
            },
            routes: {
                recommend: "Para primeira vez, a rota do Centro Histórico cobre todos os pontos principais.",
                time: "Rota histórica leva 4-5 horas, Taipa 3-4 horas. Manhã histórico, tarde Taipa.",
                default: "Arraste rotas recomendadas para a linha do tempo para planejamento automático."
            },
            attractions: {
                ruins: "Ruínas de São Paulo é o marco mais famoso. Visite antes das 9h para evitar multidões.",
                tower: "Torre de Macau tem 338m com bungee jumping. Ingresso cerca de MOP 195.",
                venetian: "The Venetian tem canais internos e passeios de gôndola. Ótimo para compras.",
                default: "Arraste cartões de atrações para a linha do tempo. A duração é ajustável."
            },
            overview: {
                weather: "Está ensolarado em Macau, 22-26°C. Perfeito para atividades ao ar livre!",
                plan: "Você tem 8 pontos planejados hoje com 12km de caminhada. Use sapatos confortáveis!",
                default: "Posso ajudar com orçamento, rotas ou atrações. O que gostaria de saber?"
            }
        }
    };
    
    const langResponses = responses[currentLang] || responses.zh;
    const tabResponses = langResponses[tab] || langResponses.overview;
    
    const lowerMsg = userMsg.toLowerCase();
    if (lowerMsg.includes('save') || lowerMsg.includes('save') || lowerMsg.includes('省')) {
        return tabResponses.save;
    } else if (lowerMsg.includes('food') || lowerMsg.includes('eat') || lowerMsg.includes('吃') || lowerMsg.includes('食')) {
        return tabResponses.food;
    } else if (lowerMsg.includes('recommend') || lowerMsg.includes('推荐') || lowerMsg.includes('建议')) {
        return tabResponses.recommend || langResponses.routes.recommend || tabResponses.default;
    } else if (lowerMsg.includes('time') || lowerMsg.includes('hour') || lowerMsg.includes('时间') || lowerMsg.includes('多久')) {
        return tabResponses.time;
    } else if (lowerMsg.includes('ruins') || lowerMsg.includes('大三巴')) {
        return langResponses.attractions.ruins;
    } else if (lowerMsg.includes('tower') || lowerMsg.includes('塔')) {
        return langResponses.attractions.tower;
    } else if (lowerMsg.includes('venetian') || lowerMsg.includes('威尼斯')) {
        return langResponses.attractions.venetian;
    } else if (lowerMsg.includes('weather') || lowerMsg.includes('天气')) {
        return langResponses.overview.weather;
    }
    
    return tabResponses.default;
}

// ========================================
// Map Initialization (Google Maps Embed)
// ========================================

function initMap() {
    const mapFrame = document.getElementById('google-map');
    const locateBtn = document.getElementById('locate-btn');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    
    // Locate button - reset to Macau center
    if (locateBtn) {
        locateBtn.addEventListener('click', () => {
            mapFrame.src = mapFrame.src; // Reload to reset position
        });
    }
    
    // Fullscreen button
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', () => {
            const mapSection = document.querySelector('.map-section');
            if (!document.fullscreenElement) {
                mapSection.requestFullscreen().catch(err => {
                    console.error('Fullscreen error:', err);
                });
            } else {
                document.exitFullscreen();
            }
        });
    }
    
    // Marker interactions
    const markers = document.querySelectorAll('.map-attraction-marker');
    markers.forEach(marker => {
        marker.addEventListener('click', () => {
            const name = marker.dataset.name;
            highlightTimelineItem(name);
        });
        
        marker.addEventListener('mouseenter', () => {
            marker.style.zIndex = '100';
        });
        
        marker.addEventListener('mouseleave', () => {
            marker.style.zIndex = '';
        });
    });
}

function highlightTimelineItem(name) {
    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => {
        item.classList.remove('highlight');
        if (item.dataset.name && item.dataset.name.includes(name)) {
            item.classList.add('highlight');
            item.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => item.classList.remove('highlight'), 3000);
        }
    });
}

// ========================================
// Draggable Timeline
// ========================================

function initTimeline() {
    const track = document.getElementById('timeline-track');
    const timeAxis = document.getElementById('time-axis');
    const items = document.querySelectorAll('.timeline-item');
    
    // Initialize time axis dragging (shifts all items)
    initTimeAxisDrag(timeAxis, track);
    initTimeMarkerNavigation(timeAxis, track);
    
    items.forEach(item => {
        makeDraggable(item, track);
        makeResizable(item, track);
        initItemActions(item);
    });
    
    // Drop zone for dragged attractions/routes
    track.addEventListener('dragover', (e) => {
        e.preventDefault();
        track.classList.add('drag-over');
    });
    
    track.addEventListener('dragleave', () => {
        track.classList.remove('drag-over');
    });
    
    track.addEventListener('drop', (e) => {
        e.preventDefault();
        track.classList.remove('drag-over');
        
        const data = e.dataTransfer.getData('text/plain');
        if (data) {
            try {
                const itemData = JSON.parse(data);
                addItemToTimeline(itemData, track, e);
            } catch (err) {
                console.error('Invalid drag data:', err);
            }
        }
    });
    
    // Timeline action buttons
    initTimelineActions();
    
    // Update current time indicator
    updateCurrentTimeLine();
    setInterval(updateCurrentTimeLine, 60000); // Update every minute
    
    // Initial conflict check
    checkConflicts();
}

function initItemActions(item) {
    const deleteBtn = item.querySelector('.item-btn.delete');
    const editBtn = item.querySelector('.item-btn.edit');
    const aiBtn = item.querySelector('.item-btn.ai-time');
    const aiSelector = item.querySelector('.ai-duration-selector');
    
    if (deleteBtn) {
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            if (confirm('确定要删除这个项目吗？')) {
                item.remove();
                checkConflicts();
                showToast('已删除');
            }
        });
    }
    
    if (editBtn) {
        editBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            const name = item.dataset.name || '项目';
            const newName = prompt('编辑名称:', name);
            if (newName && newName.trim()) {
                item.dataset.name = newName.trim();
                const nameEl = item.querySelector('.item-name');
                const tooltipEl = item.querySelector('.item-name-tooltip');
                if (nameEl) nameEl.textContent = newName.trim();
                if (tooltipEl) tooltipEl.textContent = newName.trim();
                showToast('名称已更新');
            }
        });
    }
    
    // AI Duration selector
    if (aiBtn && aiSelector) {
        aiBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            
            // Close all other selectors
            document.querySelectorAll('.ai-duration-selector.show').forEach(sel => {
                if (sel !== aiSelector) sel.classList.remove('show');
            });
            
            // Toggle current
            aiSelector.classList.toggle('show');
        });
        
        // Handle option clicks
        const options = aiSelector.querySelectorAll('.ai-duration-option');
        options.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const minutes = parseInt(option.dataset.time);
                const track = document.getElementById('timeline-track');
                
                // Calculate new width based on duration
                // 16 hours = 960 minutes = 100% width
                const newWidth = (minutes / 960) * 100 * 4; // Scale factor for visibility
                const finalWidth = Math.max(5, Math.min(35, newWidth));
                
                item.style.width = finalWidth + '%';
                item.dataset.duration = minutes;
                
                // Update duration display
                const durationEl = item.querySelector('.item-duration');
                if (durationEl) {
                    durationEl.textContent = minutes >= 60 
                        ? (minutes / 60).toFixed(1).replace('.0', '') + 'h'
                        : minutes + 'min';
                }
                
                // Update time tooltip
                const leftPercent = parseFloat(item.style.left) || 0;
                updateTimeTooltip(item, leftPercent);
                
                // Hide selector
                aiSelector.classList.remove('show');
                
                // Check conflicts
                checkConflicts();
                
                showToast(`已设置: ${option.querySelector('span').textContent} (${minutes}分钟)`);
            });
        });
    }
    
    // Close AI selector when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.ai-duration-selector') && !e.target.closest('.item-btn.ai-time')) {
            document.querySelectorAll('.ai-duration-selector.show').forEach(sel => {
                sel.classList.remove('show');
            });
        }
    });
}

function initTimeMarkerNavigation(timeAxis, track) {
    if (!timeAxis || !track) return;

    const markers = timeAxis.querySelectorAll('.time-marker');
    const itemsSelector = '.timeline-item.attraction-item-timeline';

    markers.forEach(marker => {
        marker.addEventListener('click', () => {
            markers.forEach(m => m.classList.remove('is-selected'));
            marker.classList.add('is-selected');

            const firstItem = track.querySelector(itemsSelector);
            if (!firstItem) return;

            const itemLeft = parseFloat(firstItem.style.left) || 0;
            const targetLeft = parseFloat(marker.style.left) || 0;
            const delta = targetLeft - itemLeft;

            const allItems = track.querySelectorAll('.timeline-item');
            allItems.forEach(item => {
                const left = parseFloat(item.style.left) || 0;
                const nextLeft = Math.max(0, Math.min(96, left + delta));
                item.style.left = `${nextLeft}%`;
                item.dataset.baseLeft = nextLeft;
                updateTimeTooltip(item, nextLeft);
            });

            showToast(`已跳转到 ${marker.dataset.time}:00 时间段`);
            checkConflicts();
        });
    });
}

function initTimelineActions() {
    const clearBtn = document.getElementById('clear-timeline');
    const optimizeBtn = document.getElementById('optimize-route');
    const checkBtn = document.getElementById('check-conflicts');
    
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            if (confirm('确定要清空所有时间轴项目吗？')) {
                const track = document.getElementById('timeline-track');
                const items = track.querySelectorAll('.timeline-item');
                items.forEach(item => item.remove());
                showToast('时间轴已清空');
            }
        });
    }
    
    if (optimizeBtn) {
        optimizeBtn.addEventListener('click', optimizeTimeline);
    }
    
    if (checkBtn) {
        checkBtn.addEventListener('click', () => {
            checkConflicts();
            showToast('冲突检查完成');
        });
    }
}

function updateCurrentTimeLine() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    // Only show if between 8:00 and 24:00
    if (hours >= 8) {
        const totalMinutes = (hours - 8) * 60 + minutes;
        const percent = (totalMinutes / (16 * 60)) * 100;
        
        const line = document.getElementById('current-time-line');
        if (line && percent <= 100) {
            line.style.left = percent + '%';
            line.style.display = 'block';
        }
    }
}

function checkConflicts() {
    const track = document.getElementById('timeline-track');
    const items = Array.from(track.querySelectorAll('.timeline-item.attraction-item-timeline'));
    
    // Reset conflicts
    items.forEach(item => item.classList.remove('has-conflict'));
    track.classList.remove('has-conflict');
    
    let hasConflict = false;
    
    // Check for overlaps
    for (let i = 0; i < items.length; i++) {
        for (let j = i + 1; j < items.length; j++) {
            const item1 = items[i];
            const item2 = items[j];
            
            const left1 = parseFloat(item1.style.left) || 0;
            const width1 = parseFloat(item1.style.width) || 0;
            const left2 = parseFloat(item2.style.left) || 0;
            const width2 = parseFloat(item2.style.width) || 0;
            
            const right1 = left1 + width1;
            const right2 = left2 + width2;
            
            // Check overlap
            if (left1 < right2 && right1 > left2) {
                item1.classList.add('has-conflict');
                item2.classList.add('has-conflict');
                hasConflict = true;
            }
        }
    }
    
    if (hasConflict) {
        track.classList.add('has-conflict');
    }
    
    return hasConflict;
}

function optimizeTimeline() {
    const track = document.getElementById('timeline-track');
    const items = Array.from(track.querySelectorAll('.timeline-item.attraction-item-timeline'));
    
    if (items.length === 0) {
        showToast('没有可优化的项目');
        return;
    }
    
    // Sort by current position
    items.sort((a, b) => {
        const leftA = parseFloat(a.style.left) || 0;
        const leftB = parseFloat(b.style.left) || 0;
        return leftA - leftB;
    });
    
    // Reorder with gaps
    let currentLeft = 5; // Start at 5%
    
    items.forEach((item, index) => {
        const width = parseFloat(item.style.width) || 10;
        
        // Animate to new position
        item.style.transition = 'left 0.5s ease';
        item.style.left = currentLeft + '%';
        
        // Add gap after item (except for last)
        currentLeft += width + 2; // 2% gap
        
        // Update time tooltip
        updateTimeTooltip(item, currentLeft - width - 2);
    });
    
    // Remove transition after animation
    setTimeout(() => {
        items.forEach(item => {
            item.style.transition = '';
        });
        checkConflicts();
    }, 500);
    
    showToast('路线已优化');
}

function updateTimeTooltip(item, leftPercent) {
    const tooltip = item.querySelector('.time-tooltip');
    if (!tooltip) return;

    const duration = parseInt(item.dataset.duration, 10) || 60;
    const startTotalMins = 8 * 60 + (leftPercent / 100) * (16 * 60);
    const endTotalMins = startTotalMins + duration;

    const startTime = minutesToTime(startTotalMins);
    const endTime = minutesToTime(endTotalMins);

    tooltip.textContent = `${startTime} - ${endTime}`;
}

function percentToTime(percent) {
    const totalMinutes = 8 * 60 + (percent / 100) * (16 * 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.floor(totalMinutes % 60);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

function minutesToTime(totalMinutes) {
    const normalized = Math.max(0, Math.round(totalMinutes));
    const hours = Math.floor(normalized / 60);
    const minutes = normalized % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

function makeDraggable(item, track) {
    let isDragging = false;
    let startX = 0;
    let startLeft = 0;
    
    const onMouseDown = (e) => {
        // Don't drag if clicking resize handle or action buttons
        if (e.target.classList.contains('resize-handle') || 
            e.target.closest('.item-btn') ||
            e.target.closest('.ai-duration-selector')) return;
        
        isDragging = true;
        startX = e.clientX || e.touches?.[0]?.clientX;
        const rect = item.getBoundingClientRect();
        const trackRect = track.getBoundingClientRect();
        startLeft = ((rect.left - trackRect.left) / trackRect.width) * 100;
        
        item.classList.add('dragging');
        
        // Show snap guide
        const snapGuide = document.getElementById('snap-guide');
        if (snapGuide) snapGuide.classList.add('active');
        
        e.preventDefault();
    };
    
    const onMouseMove = (e) => {
        if (!isDragging) return;
        
        const clientX = e.clientX || e.touches?.[0]?.clientX;
        const trackRect = track.getBoundingClientRect();
        const deltaX = clientX - startX;
        const deltaPercent = (deltaX / trackRect.width) * 100;
        let newLeft = startLeft + deltaPercent;
        
        // Snap to grid (every 30 min = 3.125%)
        const snapInterval = 3.125;
        const snappedLeft = Math.round(newLeft / snapInterval) * snapInterval;
        
        // Use snap if close enough (within 1%)
        if (Math.abs(newLeft - snappedLeft) < 1) {
            newLeft = snappedLeft;
            
            // Update snap guide position
            const snapGuide = document.getElementById('snap-guide');
            if (snapGuide) snapGuide.style.left = newLeft + '%';
        }
        
        // Constrain
        newLeft = Math.max(0, Math.min(95, newLeft));
        item.style.left = newLeft + '%';
        
        // Update baseLeft to current position
        item.dataset.baseLeft = newLeft;
        
        updateTimeTooltip(item, newLeft);
    };
    
    const onMouseUp = () => {
        if (isDragging) {
            isDragging = false;
            item.classList.remove('dragging');
            
            // Hide snap guide
            const snapGuide = document.getElementById('snap-guide');
            if (snapGuide) snapGuide.classList.remove('active');
            
            // Check conflicts after drop
            checkConflicts();
        }
    };
    
    item.addEventListener('mousedown', onMouseDown);
    item.addEventListener('touchstart', onMouseDown, { passive: false });
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchmove', onMouseMove, { passive: false });
    
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('touchend', onMouseUp);
}

function makeResizable(item, track) {
    const handle = item.querySelector('.resize-handle');
    if (!handle) return;
    
    let isResizing = false;
    let startX = 0;
    let startWidth = 0;
    let startLeft = 0;
    
    const onMouseDown = (e) => {
        isResizing = true;
        startX = e.clientX || e.touches?.[0]?.clientX;
        startWidth = parseFloat(item.style.width) || 10;
        startLeft = parseFloat(item.style.left) || 0;
        item.classList.add('resizing');
        e.preventDefault();
        e.stopPropagation();
    };
    
    const onMouseMove = (e) => {
        if (!isResizing) return;
        
        const clientX = e.clientX || e.touches?.[0]?.clientX;
        const trackRect = track.getBoundingClientRect();
        const deltaX = clientX - startX;
        const deltaPercent = (deltaX / trackRect.width) * 100;
        let newWidth = startWidth + deltaPercent;
        
        // Snap to grid (30 min intervals)
        const snapInterval = 3.125;
        const snappedWidth = Math.round(newWidth / snapInterval) * snapInterval;
        if (Math.abs(newWidth - snappedWidth) < 0.8) {
            newWidth = snappedWidth;
        }
        
        // Min width 3%, max 35%
        newWidth = Math.max(3, Math.min(35, newWidth));
        item.style.width = newWidth + '%';
        
        // Update duration display and tooltip
        updateItemDuration(item, newWidth);
        updateTimeTooltip(item, startLeft);
    };
    
    const onMouseUp = () => {
        if (isResizing) {
            isResizing = false;
            item.classList.remove('resizing');
            checkConflicts();
        }
    };
    
    handle.addEventListener('mousedown', onMouseDown);
    handle.addEventListener('touchstart', onMouseDown, { passive: false });
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchmove', onMouseMove, { passive: false });
    
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('touchend', onMouseUp);
}



function updateItemDuration(item, widthPercent) {
    // 100% width = 16 hours = 960 minutes
    const minutes = Math.round((widthPercent / 100) * 960);
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    
    // Update duration badge if exists
    const duration = item.querySelector('.duration-badge');
    if (duration) {
        duration.textContent = mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
    }
    
    item.dataset.duration = minutes;
}

function addItemToTimeline(data, track, event) {
    const trackRect = track.getBoundingClientRect();
    const x = event.clientX - trackRect.left;
    let leftPercent = (x / trackRect.width) * 100;
    
    // Snap to grid
    const snapInterval = 3.125;
    leftPercent = Math.round(leftPercent / snapInterval) * snapInterval;
    leftPercent = Math.max(0, Math.min(90, leftPercent));
    
    const item = document.createElement('div');
    
    // Generate AI duration options based on default duration
    const defaultDuration = data.duration || 60;
    const fastDuration = Math.round(defaultDuration * 0.5);
    const leisureDuration = Math.round(defaultDuration * 1.5);
    
    const aiDurationHTML = `
        <div class="ai-duration-selector">
            <div class="ai-duration-title">🤖 AI推荐时长</div>
            <div class="ai-duration-option fast" data-time="${fastDuration}">
                <i class="fas fa-running"></i>
                <span>快速打卡</span>
                <span class="ai-duration-time">${fastDuration >= 60 ? (fastDuration/60).toFixed(1).replace('.0','')+'h' : fastDuration+'min'}</span>
            </div>
            <div class="ai-duration-option standard" data-time="${defaultDuration}">
                <i class="fas fa-walking"></i>
                <span>标准游览</span>
                <span class="ai-duration-time">${defaultDuration >= 60 ? (defaultDuration/60).toFixed(1).replace('.0','')+'h' : defaultDuration+'min'}</span>
            </div>
            <div class="ai-duration-option leisure" data-time="${leisureDuration}">
                <i class="fas fa-coffee"></i>
                <span>悠闲深度</span>
                <span class="ai-duration-time">${leisureDuration >= 60 ? (leisureDuration/60).toFixed(1).replace('.0','')+'h' : leisureDuration+'min'}</span>
            </div>
        </div>
    `;
    
    if (data.type === 'route') {
        // Add multiple items for a route
        item.className = 'timeline-item attraction-item-timeline';
        item.style.cssText = `left: ${leftPercent}%; width: 20%;`;
        item.dataset.duration = '240';
        item.dataset.name = data.name;
        item.dataset.fast = fastDuration;
        item.dataset.standard = defaultDuration;
        item.dataset.leisure = leisureDuration;
        item.dataset.baseLeft = leftPercent; // Store initial position
        item.innerHTML = `
            <div class="item-name-tooltip">${data.name}</div>
            <div class="time-tooltip">${percentToTime(leftPercent)} - ${percentToTime(leftPercent + 20)}</div>
            ${aiDurationHTML}
            <div class="item-actions">
                <button class="item-btn ai-time" title="AI推荐时长"><i class="fas fa-robot"></i></button>
                <button class="item-btn edit" title="编辑"><i class="fas fa-pen"></i></button>
                <button class="item-btn delete" title="删除"><i class="fas fa-times"></i></button>
            </div>
            <div class="item-content">
                <i class="fas fa-route"></i>
                <span class="item-name">${data.name}</span>
                <span class="item-duration">4h</span>
                <div class="resize-handle"></div>
            </div>
            <div class="conflict-indicator"><i class="fas fa-exclamation-triangle"></i> 时间冲突</div>
        `;
    } else if (data.type === 'attraction') {
        // Calculate width based on duration (max 240 min = 25% width)
        const widthPercent = Math.min(25, Math.max(5, (data.duration / 240) * 25));
        const durationText = data.duration >= 60 
            ? (data.duration / 60).toFixed(1).replace('.0', '') + 'h'
            : data.duration + 'min';
        
        item.className = 'timeline-item attraction-item-timeline';
        item.style.cssText = `left: ${leftPercent}%; width: ${widthPercent}%;`;
        item.dataset.duration = data.duration;
        item.dataset.name = data.name;
        item.dataset.fast = fastDuration;
        item.dataset.standard = defaultDuration;
        item.dataset.leisure = leisureDuration;
        item.dataset.baseLeft = leftPercent; // Store initial position
        item.innerHTML = `
            <div class="item-name-tooltip">${data.name}</div>
            <div class="time-tooltip">${percentToTime(leftPercent)} - ${percentToTime(leftPercent + widthPercent)}</div>
            ${aiDurationHTML}
            <div class="item-actions">
                <button class="item-btn ai-time" title="AI推荐时长"><i class="fas fa-robot"></i></button>
                <button class="item-btn edit" title="编辑"><i class="fas fa-pen"></i></button>
                <button class="item-btn delete" title="删除"><i class="fas fa-times"></i></button>
            </div>
            <div class="item-content">
                <i class="fas fa-map-marker-alt"></i>
                <span class="item-name">${data.name}</span>
                <span class="item-duration">${durationText}</span>
                <div class="resize-handle"></div>
            </div>
            <div class="conflict-indicator"><i class="fas fa-exclamation-triangle"></i> 时间冲突</div>
        `;
    }
    
    track.appendChild(item);
    makeDraggable(item, track);
    makeResizable(item, track);
    initItemActions(item);
    
    showToast(`已添加: ${data.name}`);
    checkConflicts();
}

function showToast(message) {
    const existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--text-primary);
        color: white;
        padding: 12px 24px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        font-size: 0.9rem;
        animation: fadeIn 0.3s ease;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ========================================
// Draggable Routes & Attractions
// ========================================

function initDraggables() {
    // Route templates
    const routes = document.querySelectorAll('.route-template');
    routes.forEach(route => {
        route.addEventListener('dragstart', (e) => {
            const routeName = route.querySelector('h4').textContent;
            const data = {
                type: 'route',
                name: routeName,
                routeType: route.dataset.route
            };
            e.dataTransfer.setData('text/plain', JSON.stringify(data));
            e.dataTransfer.effectAllowed = 'copy';
        });
    });
    
    // Attraction cards
    const attractions = document.querySelectorAll('.attraction-card');
    attractions.forEach(attr => {
        attr.addEventListener('dragstart', (e) => {
            const name = attr.querySelector('h4').textContent;
            const duration = parseInt(attr.dataset.duration) || 60;
            const data = {
                type: 'attraction',
                name: name,
                duration: duration,
                id: attr.dataset.attraction
            };
            e.dataTransfer.setData('text/plain', JSON.stringify(data));
            e.dataTransfer.effectAllowed = 'copy';
        });
    });
}

// ========================================
// Filter Tags
// ========================================

function initFilters() {
    const tags = document.querySelectorAll('.filter-tag');
    
    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            tags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            
            const filter = tag.dataset.filter;
            filterAttractions(filter);
        });
    });
}

function filterAttractions(filter) {
    const cards = document.querySelectorAll('.attraction-card');
    
    cards.forEach(card => {
        if (filter === 'all') {
            card.style.display = 'block';
        } else {
            // Simplified filtering logic
            const name = card.dataset.attraction;
            const isHistoric = ['ruins', 'senado'].includes(name);
            const isFood = name === 'food';
            const isNature = name === 'nature';
            
            if (filter === 'historic' && isHistoric) {
                card.style.display = 'block';
            } else if (filter === 'food' && isFood) {
                card.style.display = 'block';
            } else if (filter === 'nature' && isNature) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// ========================================
// Day Selector
// ========================================

function initDaySelector() {
    const dayBtns = document.querySelectorAll('.day-btn');
    
    dayBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            dayBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

// ========================================
// Initialize All
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    initTabs();
    initChat();
    initMap();
    initTimeline();
    initDraggables();
    initFilters();
    initDaySelector();
    initTimeSelector();
    initEventsPage();
    initRestaurantReservation();
    initMapRoutes();
    
    // Set initial AI context
    updateAIContext('overview');
    
    console.log('🗺️ Macao AI Travel Planner initialized!');
    console.log('✨ Features:');
    console.log('   - Tab navigation (Overview/Events/Budget/Routes/Attractions/Restaurants)');
    console.log('   - Time selector with month + date phases');
    console.log('   - Context-aware AI chat');
    console.log('   - Google Maps embed with routes');
    console.log('   - Drag routes/attractions to timeline');
    console.log('   - Transport tooltips with time/distance');
    console.log('   - Restaurant AI reservation system');
    console.log('   - Events page with filtering');
    console.log('   - Multi-language support (CN/EN/PT)');
});

// ========================================
// Time Axis Drag (Shifts all items together)
// ========================================

function initTimeAxisDrag(timeAxis, track) {
    if (!timeAxis) return;
    
    let isDragging = false;
    let startX = 0;
    let initialShift = 0;
    
    // Get markers (these are static)
    const markers = timeAxis.querySelectorAll('.time-marker');
    
    // Store base positions for markers
    markers.forEach(marker => {
        if (!marker.dataset.baseLeft) {
            marker.dataset.baseLeft = parseFloat(marker.style.left) || 0;
        }
    });
    
    const onMouseDown = (e) => {
        // Only drag if clicking on time-axis background, not markers
        if (e.target.closest('.time-marker') && !e.target.classList.contains('time-axis')) {
            return;
        }
        
        isDragging = true;
        startX = e.clientX || e.touches?.[0]?.clientX;
        
        // Get current shift amount
        const firstMarker = markers[0];
        initialShift = parseFloat(firstMarker?.dataset.shift || 0);
        
        // Ensure all items have baseLeft set
        const currentItems = track.querySelectorAll('.timeline-item');
        currentItems.forEach(item => {
            if (!item.dataset.baseLeft) {
                item.dataset.baseLeft = parseFloat(item.style.left) || 0;
            }
        });
        
        timeAxis.classList.add('dragging');
        document.body.style.cursor = 'grabbing';
        
        e.preventDefault();
    };
    
    const onMouseMove = (e) => {
        if (!isDragging) return;
        
        const clientX = e.clientX || e.touches?.[0]?.clientX;
        const trackRect = track.getBoundingClientRect();
        const deltaX = clientX - startX;
        const deltaPercent = (deltaX / trackRect.width) * 100;
        
        // Calculate new shift
        let newShift = initialShift + deltaPercent;
        
        // Constrain shift (don't shift too far left or right)
        const minShift = -30; // Can shift 30% left
        const maxShift = 30;  // Can shift 30% right
        newShift = Math.max(minShift, Math.min(maxShift, newShift));
        
        // Apply shift to all markers
        markers.forEach(marker => {
            const baseLeft = parseFloat(marker.dataset.baseLeft) || 0;
            marker.style.left = (baseLeft + newShift) + '%';
            marker.dataset.shift = newShift;
        });
        
        // Apply shift to all timeline items (get fresh list)
        const currentItems = track.querySelectorAll('.timeline-item');
        currentItems.forEach(item => {
            const baseLeft = parseFloat(item.dataset.baseLeft) || 0;
            let newLeft = baseLeft + newShift;
            
            // Constrain items to track bounds
            newLeft = Math.max(0, Math.min(95, newLeft));
            item.style.left = newLeft + '%';
            item.dataset.currentShift = newShift;
            
            // Update time tooltip
            updateTimeTooltip(item, newLeft);
        });
        
        // Update current time line if visible
        updateCurrentTimeLinePosition(newShift);
    };
    
    const onMouseUp = () => {
        if (isDragging) {
            isDragging = false;
            timeAxis.classList.remove('dragging');
            document.body.style.cursor = '';
            
            // Update base positions to new shifted positions
            const finalShift = parseFloat(markers[0]?.dataset.shift || 0);
            markers.forEach(marker => {
                const currentLeft = parseFloat(marker.style.left) || 0;
                marker.dataset.baseLeft = currentLeft;
                marker.dataset.shift = 0;
            });
            
            // Update all current items
            const currentItems = track.querySelectorAll('.timeline-item');
            currentItems.forEach(item => {
                const currentLeft = parseFloat(item.style.left) || 0;
                item.dataset.baseLeft = currentLeft;
                item.dataset.currentShift = 0;
            });
            
            // Check conflicts after shifting
            checkConflicts();
            
            // Show toast if shifted
            if (Math.abs(finalShift) > 1) {
                const shiftMins = Math.round((finalShift / 100) * 16 * 60);
                const direction = finalShift > 0 ? '推迟' : '提前';
                showToast(`行程已${direction} ${Math.abs(shiftMins)} 分钟`);
            }
        }
    };
    
    timeAxis.addEventListener('mousedown', onMouseDown);
    timeAxis.addEventListener('touchstart', onMouseDown, { passive: false });
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchmove', onMouseMove, { passive: false });
    
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('touchend', onMouseUp);
}

function updateCurrentTimeLinePosition(shiftPercent) {
    const line = document.getElementById('current-time-line');
    if (!line) return;
    
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    if (hours >= 8) {
        const totalMinutes = (hours - 8) * 60 + minutes;
        const basePercent = (totalMinutes / (16 * 60)) * 100;
        const finalPercent = basePercent + shiftPercent;
        
        if (finalPercent >= 0 && finalPercent <= 100) {
            line.style.left = finalPercent + '%';
            line.style.display = 'block';
        } else {
            line.style.display = 'none';
        }
    }
}

// Time marker click to add quick item
document.querySelectorAll('.time-marker').forEach(marker => {
    marker.addEventListener('dblclick', () => {
        const time = marker.dataset.time;
        const leftPercent = parseFloat(marker.style.left);
        
        const track = document.getElementById('timeline-track');
        const item = document.createElement('div');
        const defaultDuration = 60;
        const fastDuration = 30;
        const leisureDuration = 90;
        
        item.className = 'timeline-item attraction-item-timeline';
        item.style.cssText = `left: ${leftPercent}%; width: 6.25%;`;
        item.dataset.duration = defaultDuration;
        item.dataset.name = '新景点';
        item.dataset.fast = fastDuration;
        item.dataset.standard = defaultDuration;
        item.dataset.leisure = leisureDuration;
        
        item.innerHTML = `
            <div class="item-name-tooltip">新景点</div>
            <div class="time-tooltip">${time}:00 - ${parseInt(time)+1}:00</div>
            <div class="ai-duration-selector">
                <div class="ai-duration-title">🤖 AI推荐时长</div>
                <div class="ai-duration-option fast" data-time="${fastDuration}">
                    <i class="fas fa-running"></i>
                    <span>快速打卡</span>
                    <span class="ai-duration-time">30min</span>
                </div>
                <div class="ai-duration-option standard" data-time="${defaultDuration}">
                    <i class="fas fa-walking"></i>
                    <span>标准游览</span>
                    <span class="ai-duration-time">60min</span>
                </div>
                <div class="ai-duration-option leisure" data-time="${leisureDuration}">
                    <i class="fas fa-coffee"></i>
                    <span>悠闲深度</span>
                    <span class="ai-duration-time">90min</span>
                </div>
            </div>
            <div class="item-actions">
                <button class="item-btn ai-time" title="AI推荐时长"><i class="fas fa-robot"></i></button>
                <button class="item-btn edit" title="编辑"><i class="fas fa-pen"></i></button>
                <button class="item-btn delete" title="删除"><i class="fas fa-times"></i></button>
            </div>
            <div class="item-content">
                <i class="fas fa-map-marker-alt"></i>
                <span class="item-name">新景点</span>
                <span class="item-duration">60min</span>
                <div class="resize-handle"></div>
            </div>
            <div class="conflict-indicator"><i class="fas fa-exclamation-triangle"></i> 时间冲突</div>
        `;
        
        track.appendChild(item);
        makeDraggable(item, track);
        makeResizable(item, track);
        initItemActions(item);
        checkConflicts();
        
        // Auto edit name
        const editBtn = item.querySelector('.item-btn.edit');
        editBtn.click();
    });
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, setLanguage };
}
