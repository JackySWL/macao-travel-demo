// ========================================
// Time Selector - Month & Date
// ========================================

function initTimeSelector() {
    // Month selector
    const monthBtns = document.querySelectorAll('.month-btn');
    monthBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            monthBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const month = btn.dataset.month;
            updateEventsForMonth(month);
            showToast(`已选择 ${month} 月`);
        });
    });
    
    // Date toggle
    const dateToggle = document.getElementById('enable-date');
    const dateRangeSection = document.getElementById('date-range-section');
    
    if (dateToggle && dateRangeSection) {
        dateToggle.addEventListener('change', () => {
            dateRangeSection.style.opacity = dateToggle.checked ? '1' : '0.5';
            dateRangeSection.style.pointerEvents = dateToggle.checked ? 'auto' : 'none';
        });
    }
    
    // Date range calculation
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');
    
    function updateTripDuration() {
        if (startDateInput && endDateInput) {
            const start = new Date(startDateInput.value);
            const end = new Date(endDateInput.value);
            
            if (start && end && end >= start) {
                const diffTime = Math.abs(end - start);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
                const nights = diffDays - 1;
                
                const nightsEl = document.getElementById('trip-nights');
                const daysEl = document.getElementById('trip-days-count');
                
                if (nightsEl) nightsEl.textContent = `${nights}晚`;
                if (daysEl) daysEl.textContent = `${diffDays}天`;
            }
        }
    }
    
    if (startDateInput) {
        startDateInput.addEventListener('change', updateTripDuration);
    }
    if (endDateInput) {
        endDateInput.addEventListener('change', updateTripDuration);
    }
}

function updateEventsForMonth(month) {
    // Update events subtitle
    const eventsSubtitle = document.getElementById('events-date-range');
    if (eventsSubtitle) {
        eventsSubtitle.textContent = `2026年${month}月`;
    }
    
    // Here you could load different events based on the month
    console.log(`Loading events for month: ${month}`);
}

// ========================================
// Events Page
// ========================================

function initEventsPage() {
    // Event filters
    const filterBtns = document.querySelectorAll('.event-filter-btn');
    const eventCards = document.querySelectorAll('.event-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            eventCards.forEach(card => {
                if (filter === 'all' || card.dataset.type === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Add to trip buttons
    const addBtns = document.querySelectorAll('.event-add-btn');
    addBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const eventName = btn.closest('.event-card').querySelector('.event-title').textContent;
            showToast(`已将 "${eventName}" 添加到行程`);
            
            // Could actually add to timeline here
            btn.innerHTML = '<i class="fas fa-check"></i> 已添加';
            btn.disabled = true;
            btn.style.background = '#10b981';
        });
    });
}

// ========================================
// Restaurant Reservation
// ========================================

function initRestaurantReservation() {
    const reserveModal = document.getElementById('reserve-modal');
    const successModal = document.getElementById('success-modal');
    const closeBtn = document.getElementById('modal-close');
    const closeSuccessBtn = document.getElementById('btn-close-success');
    const reserveForm = document.getElementById('reserve-form');
    
    // Open reservation modal
    const reserveBtns = document.querySelectorAll('.btn-reserve');
    reserveBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const restaurantName = btn.dataset.name;
            const restaurantNameEl = document.getElementById('reserve-restaurant-name');
            if (restaurantNameEl) {
                restaurantNameEl.textContent = restaurantName;
            }
            
            // Set default date to today
            const dateInput = document.getElementById('reserve-date');
            if (dateInput) {
                dateInput.valueAsDate = new Date();
            }
            
            if (reserveModal) {
                reserveModal.classList.add('show');
            }
        });
    });
    
    // Close modal
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            reserveModal.classList.remove('show');
        });
    }
    
    // Close on overlay click
    if (reserveModal) {
        reserveModal.addEventListener('click', (e) => {
            if (e.target === reserveModal) {
                reserveModal.classList.remove('show');
            }
        });
    }
    
    // People counter
    const minusBtn = document.querySelector('.people-btn[data-action="minus"]');
    const plusBtn = document.querySelector('.people-btn[data-action="plus"]');
    const countDisplay = document.getElementById('people-count');
    
    if (minusBtn && countDisplay) {
        minusBtn.addEventListener('click', () => {
            let count = parseInt(countDisplay.textContent);
            if (count > 1) {
                count--;
                countDisplay.textContent = count;
            }
        });
    }
    
    if (plusBtn && countDisplay) {
        plusBtn.addEventListener('click', () => {
            let count = parseInt(countDisplay.textContent);
            if (count < 20) {
                count++;
                countDisplay.textContent = count;
            }
        });
    }
    
    // Form submission
    if (reserveForm) {
        reserveForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('reserve-name')?.value,
                date: document.getElementById('reserve-date')?.value,
                time: document.getElementById('reserve-time')?.value,
                people: document.getElementById('people-count')?.textContent,
                phone: document.getElementById('reserve-phone')?.value,
                notes: document.getElementById('reserve-notes')?.value,
                restaurant: document.getElementById('reserve-restaurant-name')?.textContent
            };
            
            console.log('Reservation data:', formData);
            
            // Close reservation modal
            reserveModal.classList.remove('show');
            
            // Show success modal
            if (successModal) {
                successModal.classList.add('show');
            }
            
            // Reset form
            reserveForm.reset();
            if (countDisplay) countDisplay.textContent = '2';
        });
    }
    
    // Close success modal
    if (closeSuccessBtn) {
        closeSuccessBtn.addEventListener('click', () => {
            successModal.classList.remove('show');
        });
    }
    
    // Add to trip buttons
    const addTripBtns = document.querySelectorAll('.btn-add-trip');
    addTripBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const restaurantName = btn.closest('.restaurant-card').querySelector('h4').textContent;
            showToast(`已将 "${restaurantName}" 加入行程`);
            btn.innerHTML = '<i class="fas fa-check"></i> 已加入';
            btn.disabled = true;
        });
    });
}

// ========================================
// Map Routes (Simulated)
// ========================================

function initMapRoutes() {
    // Since we're using Google Maps Embed, we can't draw directly on it
    // Instead, we'll show a notification that routes are calculated
    const mapSection = document.querySelector('.map-section');
    
    if (mapSection) {
        // Add route info overlay
        const routeInfo = document.createElement('div');
        routeInfo.className = 'map-route-info';
        routeInfo.style.cssText = `
            position: absolute;
            bottom: 16px;
            left: 16px;
            background: rgba(255,255,255,0.95);
            padding: 12px 16px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.15);
            font-size: 0.8rem;
            z-index: 10;
            max-width: 200px;
        `;
        routeInfo.innerHTML = `
            <div style="font-weight: 600; margin-bottom: 4px; color: var(--primary-blue);">
                <i class="fas fa-route"></i> 今日路线
            </div>
            <div style="color: var(--text-secondary);">
                全程约 15.2km<br>
                预计总时间 8小时
            </div>
        `;
        mapSection.appendChild(routeInfo);
    }
}
