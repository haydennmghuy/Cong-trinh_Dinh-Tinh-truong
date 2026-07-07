// ===== CONFIGURING STATIC APP DATA =====
const ROOM_DATABASE = {
  1: {
    name: "Phòng trưng bày 01",
    subtitle: "Quê hương, đất nước, con người và cuộc đấu tranh chống thực dân Pháp",
    views: [
      "anhphong1/anhtoanphong/anhtoanphong1.1.png"
    ],
    audio: "audiophong1.mp3",
    description: `
      <p>Tại đây trưng bày một số hình ảnh, hiện vật về quá trình hình thành và phát triển của một vùng đất và con người Phước Thành xưa, Phú Giáo hôm nay.</p>
      <p>Đặc biệt là từ khi tái lập huyện Phú Giáo đến nay. Từ một huyện nghèo khó, vùng sâu, vùng xa của tỉnh Bình Dương vươn lên phát triển mạnh mẽ theo hướng công nghiệp hóa hiện đại hóa...</p>
      <p>Năm 2019 Đảng bộ, chính quyền và nhân dân huyện Phú Giáo được Chủ tịch nước CHXHCNVN tặng Huân chương Lao động hạng nhất.</p>
    `,
    artifacts: [
      {
        id: "saban_phuocthanh",
        name: "Sa Bàn Cảnh Quan Trận Tấn Công Tiểu Khu Phước Thành (18/9/1961)",
        // Position on 1920x1080 resolution for room overview image
        xRatio: 0.3551,
        yRatio: 0.7306,
        audio: "",
        description: `
          <p>Hiện vật: Sa bàn cảnh quan trận tấn công tiểu khu Phước Thành (18/9/1961).</p>
          <p>Thông tin chi tiết của hiện vật đang được cập nhật...</p>
        `,
        // Chỉ chứa ảnh của hiện vật đó (chỉ chứa duy nhất ảnh sa bàn)
        images: [
          "anhphong1/anhienvat/anhsaban.png"
        ]
      }
    ],
    available: true
  },
  2: {
    name: "Phòng trưng bày 02",
    subtitle: "Dân – Quân Phú Giáo trong cuộc kháng chiến chống Mỹ",
    views: [],
    artifacts: [],
    available: false
  },
  3: {
    name: "Phòng trưng bày 03",
    subtitle: "Phú Giáo trên đường phát triển",
    views: [],
    artifacts: [],
    available: false
  },
  4: {
    name: "Phòng trưng bày 04",
    subtitle: "Khu Trù Mật - Ấp chiến lược kiểu mới của Mỹ - Ngụy",
    views: [],
    artifacts: [],
    available: false
  },
  5: {
    name: "Phòng trưng bày 05",
    subtitle: "Chiến thắng Phước Thành",
    views: [],
    artifacts: [],
    available: false
  }
};

// Main interactive Dinh image dimensions (1200x900)
const DIATICS_MAP = {
  src: "anhdinh/dinhtinhtruong.png",
  width: 1210,
  height: 864,
  roomPins: [
    { roomId: 1, x: 519, y: 601 }, // Phòng 1
    { roomId: 2, x: 617, y: 605 }, // Phòng 2
    { roomId: 3, x: 790, y: 596 }, // Phòng 3
    { roomId: 4, x: 520, y: 465 }, // Phòng 4
    { roomId: 5, x: 781, y: 461 }  // Phòng 5
  ]
};

// Global Gallery of the Dinh
const DINH_GALLERY_IMAGES = [
  "anhdinh/dinhtinhtruong.png",
  "anhdinh/dinh-tinh-truong-phuoc-thanh-diem-den-du-lich-thu-vi-tren-vung-que-phu-giao-3-1655399170.jpg",
  "anhdinh/0967C44491EF8086B5772E2A2DD1C1C7.jpg",
  "anhphong1/anhtoanphong/anhtoanphong1.1.png"
];

// Global parameters
let currentViewMode = "building"; // "building" | "room"
let activeRoomId = null;
let currentViewIndex = 0; // for room image slideshow
let activeOverlayImage = null;
let activeLeafletMarkers = [];
let currentViewWidth = 1200;
let currentViewHeight = 900;

// Selected artifact state
let currentArtifact = null;
let activeTab = "info";
let galleryIndex = 0;

// Leaflet Map Initialization
const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -3,
  maxZoom: 5,
  zoomSnap: 0.05, // Cho phép zoom lẻ thập phân mượt mà không bị làm tròn
  zoomControl: false,
  attributionControl: false
});

// Configure default bounds
const baseBounds = [[0, 0], [DIATICS_MAP.height, DIATICS_MAP.width]];
map.fitBounds(baseBounds);

// Custom markers using premium SVG icon styling matching the blue mockups
function createCustomPin(color = "#1d87e5", text = "") {
  const isMobile = window.innerWidth <= 768;
  const w = isMobile ? 24 : 36;
  const h = isMobile ? 30 : 46;
  const anchor = isMobile ? [12, 30] : [18, 46];
  const fontSize = isMobile ? '9px' : '11px';
  const cx = isMobile ? 12 : 19;
  const cy = isMobile ? 12 : 19;
  const r1 = isMobile ? 5 : 8;
  const r2 = isMobile ? 2.5 : 4.5;

  return L.divIcon({
    className: 'custom-pin-element',
    html: `
      <div style="cursor: pointer; position: relative;">
        <svg width="${w}" height="${h}" viewBox="0 0 38 50" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0px 3px 6px rgba(0,0,0,0.3)); display: block;">
          <path d="M19 0C8.5 0 0 8.5 0 19C0 32.2 19 50 19 50C19 50 38 32.2 38 19C38 8.5 29.5 0 19 0Z" fill="${color}"/>
          <circle cx="19" cy="19" r="8" fill="#FFFFFF"/>
          <circle cx="19" cy="19" r="4.5" fill="${color}"/>
        </svg>
        ${text ? `<div style="position: absolute; top: ${isMobile ? '-14px' : '-20px'}; left: 50%; transform: translateX(-50%); background: white; white-space: nowrap; padding: ${isMobile ? '1px 5px' : '2px 8px'}; border-radius: 4px; border: 1.5px solid ${color}; font-size: ${fontSize}; font-weight: bold; color: ${color};">${text}</div>` : ''}
      </div>
    `,
    iconSize: [w, h],
    iconAnchor: anchor
  });
}

// Red Marker for Artifacts (pin with exclamation point)
function createArtifactPin() {
  const isMobile = window.innerWidth <= 768;
  const w = isMobile ? 22 : 34;
  const h = isMobile ? 28 : 42;

  return L.divIcon({
    className: 'artifact-pin-element',
    html: `
      <div style="cursor: pointer;">
        <svg width="${w}" height="${h}" viewBox="0 0 34 44" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0px 3px 5px rgba(0,0,0,0.35)); display: block;">
          <path d="M17 0C7.6 0 0 7.6 0 17C0 28.8 17 44 17 44C17 44 34 28.8 34 17C34 7.6 26.4 0 17 0Z" fill="#bd3107"/>
          <circle cx="17" cy="17" r="7" fill="#FFFFFF"/>
          <text x="17" y="21.5" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="900" font-size="11" fill="#bd3107">!</text>
        </svg>
      </div>
    `,
    iconSize: [w, h],
    iconAnchor: [w / 2, h]
  });
}

// ===== BUILDING OVERVIEW: Show 3D model + room panel =====
function showBuildingOverview() {
  currentViewMode = "building";
  activeRoomId = null;

  // Set title capsule
  const appTitle = document.getElementById("appTitle");
  if (appTitle) appTitle.textContent = "Di Tích Lịch Sử Dinh Tỉnh Trưởng Phước Thành";

  // Hide room controls and info button
  const backBtn = document.getElementById("backBtn");
  if (backBtn) backBtn.style.display = "none";
  
  const sliderPrevBtn = document.getElementById("sliderPrevBtn");
  if (sliderPrevBtn) sliderPrevBtn.style.display = "none";
  
  const sliderNextBtn = document.getElementById("sliderNextBtn");
  if (sliderNextBtn) sliderNextBtn.style.display = "none";
  
  const roomInfoBtn = document.getElementById("roomInfoBtn");
  if (roomInfoBtn) roomInfoBtn.style.display = "none";
  
  const zoomCtrl = document.querySelector(".custom-zoom-control");
  if (zoomCtrl) zoomCtrl.style.display = "none";

  // Clear any Leaflet state
  if (activeOverlayImage) {
    try { map.removeLayer(activeOverlayImage); } catch(e) {}
    activeOverlayImage = null;
  }
  clearMarkers();

  // Hide Leaflet #map, show 3D model-viewer + room panel
  const mapEl = document.getElementById("map");
  if (mapEl) mapEl.style.display = "none";
  
  const dinhModel = document.getElementById("dinhModel");
  if (dinhModel) dinhModel.style.display = "block";
  
  const roomPanel = document.getElementById("roomPanel");
  if (roomPanel) roomPanel.style.display = "block";
}

// Load Room Display Mode
function loadRoomScreen(roomId) {
  // Auto close popups/drawers when opening a room
  hideArtifactDrawer();
  closeGlobalModal();

  const room = ROOM_DATABASE[roomId];
  if (!room) return;

  if (!room.available) {
    const updatingLabel = document.getElementById("updatingLabel");
    if (updatingLabel) updatingLabel.textContent = room.name;
    const updatingDialog = document.getElementById("updatingDialog");
    if (updatingDialog) updatingDialog.style.display = "flex";
    return;
  }

  activeRoomId = roomId;
  currentViewMode = "room";
  currentViewIndex = 0;

  // Update capsule title
  const titleNumberStr = room.name.replace("Phòng trưng bày", "Phòng trưng bày số");
  const appTitle = document.getElementById("appTitle");
  if (appTitle) appTitle.textContent = `${titleNumberStr} - ${room.subtitle}`;

  // Show back button, show zoom controls, show room info button
  const backBtn = document.getElementById("backBtn");
  if (backBtn) backBtn.style.display = "flex";
  
  const roomInfoBtn = document.getElementById("roomInfoBtn");
  if (roomInfoBtn) roomInfoBtn.style.display = "inline-flex";
  
  const zoomCtrl = document.querySelector(".custom-zoom-control");
  if (zoomCtrl) zoomCtrl.style.display = "flex";

  // Hide 3D model, hide room panel, show Leaflet map
  const dinhModel = document.getElementById("dinhModel");
  if (dinhModel) dinhModel.style.display = "none";
  
  const roomPanel = document.getElementById("roomPanel");
  if (roomPanel) roomPanel.style.display = "none";
  
  const mapEl = document.getElementById("map");
  if (mapEl) mapEl.style.display = "block";

  // Invalidate Leaflet size before rendering
  setTimeout(() => {
    map.invalidateSize();
    renderRoomView();
  }, 50);
}

// Render dynamic room view image & details
function renderRoomView() {
  const room = ROOM_DATABASE[activeRoomId];
  if (!room || !room.views.length) return;

  const currentViewSrc = room.views[currentViewIndex];

  // Setup room carousel arrows if multiple images exist
  if (room.views.length > 1) {
    document.getElementById("sliderPrevBtn").style.display = "flex";
    document.getElementById("sliderNextBtn").style.display = "flex";
  } else {
    document.getElementById("sliderPrevBtn").style.display = "none";
    document.getElementById("sliderNextBtn").style.display = "none";
  }

  // Load Image dimension dynamically before drawing overlay
  const imgTemp = new Image();
  imgTemp.src = currentViewSrc;
  imgTemp.onload = function () {
    const w = this.naturalWidth || 1920;
    const h = this.naturalHeight || 1080;
    currentViewWidth = w;
    currentViewHeight = h;

    if (activeOverlayImage) {
      map.removeLayer(activeOverlayImage);
    }
    clearMarkers();

    const bounds = [[0, 0], [h, w]];
    activeOverlayImage = L.imageOverlay(currentViewSrc, bounds).addTo(map);

    map.setMaxBounds(null);
    map.setView([h / 2, w / 2], -1);
    map.fitBounds(bounds);
    map.setMaxBounds(bounds);

    // Render Room Artifact markers
    room.artifacts.forEach(artifact => {
      const lat = h - (artifact.yRatio * h);
      const lng = artifact.xRatio * w;

      const artPin = L.marker([lat, lng], { icon: createArtifactPin() }).addTo(map);
      artPin.bindTooltip(artifact.name, {
        permanent: false,
        direction: 'top',
        className: 'room-tooltip',
        offset: [0, -38]
      });

      artPin.on('click', () => {
        showArtifactDrawer(artifact);
      });

      activeLeafletMarkers.push(artPin);
    });
  };
}

// Carousel view arrows navigation inside room
function slideRoomView(direction) {
  const room = ROOM_DATABASE[activeRoomId];
  if (!room || !room.views.length) return;

  currentViewIndex = (currentViewIndex + direction + room.views.length) % room.views.length;
  renderRoomView();
}

// Return to building overview (3D model)
function navigateBackToBuilding() {
  hideArtifactDrawer();

  // Hide Leaflet room view and room controls
  document.getElementById("map").style.display = "none";
  document.getElementById("sliderPrevBtn").style.display = "none";
  document.getElementById("sliderNextBtn").style.display = "none";
  document.getElementById("roomInfoBtn").style.display = "none";

  showBuildingOverview();
}
function clearMarkers() {
  activeLeafletMarkers.forEach(marker => {
    try {
      if (marker) map.removeLayer(marker);
    } catch (e) {
      console.warn("Failed to remove marker from map:", e);
    }
  });
  activeLeafletMarkers = [];
}

// Trigger custom zoom action
function triggerZoom(step) {
  if (step > 0) {
    map.zoomIn();
  } else {
    map.zoomOut();
  }
}

// ===== MENU LIST CONFIG (Toggle vertical list on Menu Click) =====
function toggleMainMenu() {
  document.getElementById("verticalActions").classList.toggle("show");
}



// ===== POPUP DRAWER ACTIONS =====
function showArtifactDrawer(artifact) {
  currentArtifact = artifact;

  // Set title & badge details
  const room = ROOM_DATABASE[activeRoomId];
  document.getElementById("drawerRoomName").textContent = room.name;
  document.getElementById("drawerRoomSubtitle").textContent = room.subtitle;
  document.getElementById("drawerArtifactName").textContent = artifact.name;

  // Insert description text
  document.getElementById("artifactTextDesc").innerHTML = artifact.description;

  // Open drawer
  const drawer = document.getElementById("drawerPanel");
  drawer.classList.add("open");

  // Hi\u1ec3n th\u1ecb backdrop tr\u00ean mobile
  if (window.innerWidth <= 768) {
    document.getElementById("mobileDrawerBackdrop").style.display = "block";
  }

  // Load Audio if source exists
  setupAudioPlayer(artifact.audio);

  // Setup tab images (chỉ chứa các ảnh hiện vật)
  setupArtifactImagesTab();

  // Reset tab to Info
  activateTab("info");
}

// Hiển thị thông tin tổng quan giới thiệu của phòng trong popup drawer
function showRoomInfo() {
  const room = ROOM_DATABASE[activeRoomId];
  if (!room) return;

  currentArtifact = null; // Set to null because we are introducing the room itself

  // Set titles
  document.getElementById("drawerRoomName").textContent = room.name;
  document.getElementById("drawerRoomSubtitle").textContent = room.subtitle;
  document.getElementById("drawerArtifactName").textContent = "GIỚI THIỆU PHÒNG TRƯNG BÀY";

  // Description
  document.getElementById("artifactTextDesc").innerHTML = room.description || "<p style='font-style: italic; color:#8c7365;'>Thông tin chi tiết của phòng này đang được cập nhật...</p>";

  // Load Audio timeline/narration if available
  setupAudioPlayer(room.audio);

  // Setup room images inside Images Tab
  const grid = document.getElementById("artifactImagesGrid");
  grid.innerHTML = "";
  if (room.views && room.views.length) {
    room.views.forEach((v, index) => {
      const itemEl = document.createElement("div");
      itemEl.className = "mosaic-item";
      
      const viewsJson = JSON.stringify(room.views).replace(/"/g, "'");
      itemEl.setAttribute("onclick", `showLightbox(${viewsJson}, ${index})`);
      
      const imgEl = document.createElement("img");
      imgEl.src = v;
      imgEl.alt = `${room.name} view ${index + 1}`;
      imgEl.loading = "lazy";
      
      itemEl.appendChild(imgEl);
      grid.appendChild(itemEl);
    });
  } else {
    grid.innerHTML = `<div style="grid-column: span 3; text-align: center; color: #8c7365; font-size: 13.5px; padding: 30px; font-style: italic;">Chưa có hình ảnh phòng.</div>`;
  }

  // Activate default info tab and slide open panel
  activateTab("info");
  document.getElementById("drawerPanel").classList.add("open");

  if (window.innerWidth <= 768) {
    document.getElementById("mobileDrawerBackdrop").style.display = "block";
  }
}

function hideArtifactDrawer() {
  const drawer = document.getElementById("drawerPanel");
  drawer.classList.remove("open");

  // Ẩn backdrop tr\u00ean mobile
  document.getElementById("mobileDrawerBackdrop").style.display = "none";

  // Pause audio playback
  pauseAudio();
  currentArtifact = null;
}

// Switch between Info and Image Tabs
function activateTab(tabId) {
  activeTab = tabId;
  const btnInfo = document.getElementById("btnTabInfo");
  const btnImages = document.getElementById("btnTabImages");
  const contentInfo = document.getElementById("tabContentInfo");
  const contentImages = document.getElementById("tabContentImages");

  if (tabId === "info") {
    btnInfo.classList.add("active");
    btnImages.classList.remove("active");
    contentInfo.style.display = "block";
    contentImages.style.display = "none";
  } else {
    btnInfo.classList.remove("active");
    btnImages.classList.add("active");
    contentInfo.style.display = "none";
    contentImages.style.display = "block";
  }
}

// Setup custom gallery photos inside tab (Chỉ chứa các ảnh của hiện vật này)
function setupArtifactImagesTab() {
  const grid = document.getElementById("artifactImagesGrid");
  grid.innerHTML = "";

  if (!currentArtifact || !currentArtifact.images || !currentArtifact.images.length) {
    grid.innerHTML = `<div style="grid-column: span 3; text-align: center; color: #8c7365; font-size: 13.5px; padding: 30px; font-style: italic;">Chưa có hình ảnh hiện vật.</div>`;
    return;
  }

  currentArtifact.images.forEach((imgSrc, idx) => {
    const item = document.createElement("div");
    item.className = "mosaic-item";
    item.onclick = () => showLightbox(currentArtifact.images, idx);

    const img = document.createElement("img");
    img.src = imgSrc;
    img.loading = "lazy";
    img.alt = `Hình ảnh hiện vật ${idx + 1}`;

    item.appendChild(img);
    grid.appendChild(item);
  });
}

// ===== AUDIO TRANSCRIPT COREPLAYER =====
const audioElement = document.getElementById("coreAudioPlayer");
let isAudioPlaying = false;

function setupAudioPlayer(audioUrl) {
  const audioSec = document.getElementById("audioSection");
  if (!audioUrl) {
    audioSec.style.display = "none";
    audioElement.src = "";
    return;
  }

  audioSec.style.display = "flex";
  audioElement.src = audioUrl;
  audioElement.load();

  // Reset UI
  document.getElementById("audioBarIndicator").style.width = "0%";
  document.getElementById("audioDurationLabel").textContent = "00:00";
  setAudioPlayState(false);
}

function setAudioPlayState(playState) {
  isAudioPlaying = playState;
  const playSvg = document.getElementById("svgPlay");
  const pauseSvg = document.getElementById("svgPause");
  if (isAudioPlaying) {
    playSvg.style.display = "none";
    pauseSvg.style.display = "block";
  } else {
    playSvg.style.display = "block";
    pauseSvg.style.display = "none";
  }
}

function controlAudio() {
  if (!audioElement.src) return;
  if (isAudioPlaying) {
    pauseAudio();
  } else {
    audioElement.play().then(() => {
      setAudioPlayState(true);
    }).catch(err => console.log("Audio play error: ", err));
  }
}

function pauseAudio() {
  audioElement.pause();
  setAudioPlayState(false);
}

audioElement.addEventListener("timeupdate", () => {
  if (!audioElement.duration) return;
  const curTime = audioElement.currentTime;
  const duration = audioElement.duration;
  const percentage = (curTime / duration) * 100;

  document.getElementById("audioBarIndicator").style.width = `${percentage}%`;
  document.getElementById("audioDurationLabel").textContent = formatAudioTime(curTime);
});

audioElement.addEventListener("ended", () => {
  setAudioPlayState(false);
  document.getElementById("audioBarIndicator").style.width = "0%";
});

function audioSeek(event) {
  if (!audioElement.duration || !audioElement.src) return;
  const progressArea = document.getElementById("audioProgressArea");
  const widthTotal = progressArea.clientWidth;
  const rect = progressArea.getBoundingClientRect();
  const clickedX = event.clientX - rect.left;
  const ratio = Math.max(0, Math.min(1, clickedX / widthTotal));
  audioElement.currentTime = ratio * audioElement.duration;
}

function formatAudioTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
}

// ===== LIGHTBOX POPUP IMAGE GALLERY VIEWER =====
let activeLightboxImages = [];
let activeLightboxIndex = 0;

function showLightbox(imgList, idx) {
  activeLightboxImages = imgList;
  activeLightboxIndex = idx;

  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "flex";

  updateLightboxContent();
}

function updateLightboxContent() {
  if (!activeLightboxImages.length) return;
  const currentImg = activeLightboxImages[activeLightboxIndex];

  const lbImg = document.getElementById("lightboxImg");
  lbImg.src = currentImg;

  // Counter
  const total = activeLightboxImages.length;
  document.getElementById("lightboxCounter").textContent = `${activeLightboxIndex + 1} / ${total}`;

  // Dynamic hide arrows on single image
  const prevBtn = document.querySelector(".btn-prev");
  const nextBtn = document.querySelector(".btn-next");
  if (total <= 1) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
  } else {
    prevBtn.style.display = "flex";
    nextBtn.style.display = "flex";
  }
}

function changeLightboxIndex(direction) {
  if (!activeLightboxImages.length) return;
  activeLightboxIndex = (activeLightboxIndex + direction + activeLightboxImages.length) % activeLightboxImages.length;
  updateLightboxContent();
}

function dismissLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Lightbox keyboard binding & swipe
document.addEventListener("keydown", (e) => {
  const lb = document.getElementById("lightbox");
  if (lb.style.display === "flex") {
    if (e.key === "ArrowLeft") changeLightboxIndex(-1);
    if (e.key === "ArrowRight") changeLightboxIndex(1);
    if (e.key === "Escape") dismissLightbox();
  }
});

// Close popup dialog details for Room 2-5 updating
function closeDocUpdating() {
  document.getElementById("updatingDialog").style.display = "none";
}

// ===== DRAG SIZE FOR POPUP DRAWER (Kéo ra kéo vào) =====
const drawerEl = document.getElementById("drawerPanel");
const dragHandle = document.getElementById("drawerDragWidthHandle");
let isResizing = false;

dragHandle.addEventListener("mousedown", (e) => {
  isResizing = true;
  document.body.style.cursor = "ew-resize";
  document.body.style.userSelect = "none";
  e.preventDefault();
});

document.addEventListener("mousemove", (e) => {
  if (!isResizing) return;

  const screenW = window.innerWidth;
  const clientX = e.clientX;

  // Calculate new width relative to right side
  let newWidth = screenW - clientX;

  // Constrain width
  const minW = 320;
  const maxW = screenW * 0.85;
  if (newWidth < minW) newWidth = minW;
  if (newWidth > maxW) newWidth = maxW;

  drawerEl.style.width = `${newWidth}px`;
});

document.addEventListener("mouseup", () => {
  if (isResizing) {
    isResizing = false;
    document.body.style.cursor = "default";
    document.body.style.userSelect = "auto";
  }
});

// ===== MENU POPUPS ACTIONS =====
function viewSiteInfo() {
  const title = "Thông Tin Di Tích Dinh Tỉnh Trưởng Phước Thành";
  const body = `
    <div style="font-family: inherit; font-size: 15px; color: #4e3524;">
      <h3 style="color:#bd3107; font-family:'Playfair Display',serif; margin-bottom:12px;">1. Lịch sử hình thành</h3>
      <p style="margin-bottom:14px; text-align:justify; line-height:1.7;">
        <b>Dinh Tỉnh Trưởng Phước Thành</b> là tòa nhà hành chính đầu não của tỉnh Phước Thành – một đơn vị hành chính lâm thời tồn tại từ năm 1959 đến năm 1965 tại miền Nam Việt Nam. Toà nhà được khởi công và hoàn thành vào khoảng năm 1960.
      </p>
      
      <h3 style="color:#bd3107; font-family:'Playfair Display',serif; margin-bottom:12px;">2. Kiến trúc độc đáo</h3>
      <p style="margin-bottom:14px; text-align:justify; line-height:1.7;">
        Đặc trưng của di tích Dinh Tỉnh Trưởng là phong cách kiến trúc Pháp thuộc kết hợp vật liệu và chi tiết trang trí Nam Bộ. Đứng từ xa, toà nhà vô cùng nổi bật với hệ cột trụ dẹt sơn cam màu gạch, ngọn tháp nhọn cổ kính vút cao và các bức bích hoạt vẽ tay đồ sộ tại hai cánh nhà tả - hữu.
      </p>
      
      <h3 style="color:#bd3107; font-family:'Playfair Display',serif; margin-bottom:12px;">3. Ý nghĩa lịch sử</h3>
      <p style="text-align:justify; line-height:1.7;">
        Nơi đây từng ghi dấu những trận đánh hiển hách của quân và dân Phước Thành năm xưa, tiêu biểu là chiến thắng Phước Thành ngày 18/9/1961 chấn động địa cầu. Ngày nay, Dinh Tỉnh Trưởng Phước Thành là địa chỉ đỏ giáo dục lòng yêu nước và là di sản lịch sử quan trọng cần bảo tồn.
      </p>
    </div>
  `;
  openGlobalModal(title, body);
}

// Hình ảnh Dinh chứa toàn bộ ảnh của cả Dinh (mặt ngoài + các phòng trong)
function viewBuildingImages() {
  const title = "Hình Ảnh Dinh Tỉnh Trưởng Phước Thành";
  const body = `
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 10px;">
      ${DINH_GALLERY_IMAGES.map((src, i) => `
        <div style="aspect-ratio: 1; overflow: hidden; border-radius: 6px; border: 1.5px solid #dca05f; cursor: pointer;" 
             onclick="showLightbox(DINH_GALLERY_IMAGES, ${i})">
          <img src="${src}" style="width: 100%; height: 100%; object-fit: cover;" alt="Hình ảnh Dinh ${i + 1}">
        </div>
      `).join("")}
    </div>
  `;
  openGlobalModal(title, body);
}

// ===== DIALOG ACTIONS FOR ROOMS =====
function handleMenuInfoClick() {
  if (currentViewMode === "building") {
    viewSiteInfo();
  } else if (currentViewMode === "room") {
    viewRoomInfo(activeRoomId);
  }
}

function handleMenuImagesClick() {
  if (currentViewMode === "building") {
    viewBuildingImages();
  } else if (currentViewMode === "room") {
    viewRoomImages(activeRoomId);
  }
}

// Hiển thị thông tin tổng quan của phòng
function viewRoomInfo(roomId) {
  const room = ROOM_DATABASE[roomId];
  if (!room) return;
  const title = `Thông Tin ${room.name.replace("Phòng trưng bày", "Phòng trưng bày số")}`;

  let audioPlayerHTML = "";
  if (room.audio) {
    audioPlayerHTML = `
      <div style="margin-top: 20px; padding: 14px; background: rgba(189, 49, 7, 0.04); border-radius: 8px; border: 1.5px dashed rgba(189, 49, 7, 0.2);">
        <p style="margin: 0 0 10px 0; font-weight: bold; color: #bd3107; font-size:13.5px; display: flex; align-items: center; gap: 6px;">
          <svg style="width:16px; height:16px; fill:#bd3107;" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg> 
          THUYẾT MINH PHÒNG TRƯNG BÀY:
        </p>
        <audio src="${room.audio}" controls style="width: 100%; outline: none;"></audio>
      </div>
    `;
  }

  const body = `
    <div style="font-family: inherit; font-size: 15px; color: #4e3524; line-height: 1.7;">
      <h3 style="color:#bd3107; font-family:'Playfair Display',serif; margin-bottom:12px; font-size:18px;">
        Nội dung: ${room.subtitle}
      </h3>
      ${room.description || '<p style="font-style: italic; color:#8c7365;">Thông tin chi tiết của phòng này đang được cập nhật...</p>'}
      ${audioPlayerHTML}
    </div>
  `;
  openGlobalModal(title, body);
}

// Hiển thị hình ảnh tổng hợp của phòng (ảnh view chính + ảnh các hiện vật)
function viewRoomImages(roomId) {
  const room = ROOM_DATABASE[roomId];
  if (!room) return;

  // Thu thập mọi bức ảnh trong phòng
  let roomAllImages = [...room.views];
  room.artifacts.forEach(artifact => {
    if (artifact.images && artifact.images.length) {
      roomAllImages.push(...artifact.images);
    }
  });

  const title = `Hình Ảnh ${room.name.replace("Phòng trưng bày", "Phòng trưng bày số")}`;
  let gridHTML = "";

  if (!roomAllImages.length) {
    gridHTML = `<p style="text-align: center; color: #8c7365; font-style: italic; padding: 25px;">Hình ảnh phòng trưng bày đang được cập nhật...</p>`;
  } else {
    gridHTML = `
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 10px;">
        ${roomAllImages.map((src, i) => `
          <div style="aspect-ratio: 1; overflow: hidden; border-radius: 6px; border: 1.5px solid #dca05f; cursor: pointer;" 
               onclick="showLightbox(${JSON.stringify(roomAllImages).replace(/"/g, "'")}, ${i})">
            <img src="${src}" style="width: 100%; height: 100%; object-fit: cover;" alt="Hình ảnh phòng ${i + 1}">
          </div>
        `).join("")}
      </div>
    `;
  }

  openGlobalModal(title, gridHTML);
}

function viewProjectDetails() {
  const title = "Thông Tin Dự Án Số Hoá";
  const body = `
    <div style="font-family: inherit; font-size: 15px; color: #4e3524; line-height:1.7;">
      <p style="margin-bottom:14px; text-align:justify;">
        Dự án <b>"Số hoá địa chỉ đỏ di tích kiến trúc nghệ thuật Dinh Tỉnh Trưởng Phước Thành"</b> nằm trong khuôn khổ chương trình chuyển đổi số nhằm lưu trữ, bảo tồn và quảng bá di tích lịch sử đến quần chúng nhân dân.
      </p>
      
      <div style="background-color:rgba(189, 49, 7, 0.05); padding:16px; border-left:4px solid #bd3107; border-radius:4px; margin-bottom:16px;">
        <p style="font-weight:700; color:#bd3107; margin-bottom:6px;">Đơn vị thực hiện:</p>
        <p>Đội hình Chuyên Nâng cao Kỹ năng số</p>
        <p>Chiến dịch tình nguyện Mùa hè xanh sinh viên Kinh tế &copy; 2026</p>
      </div>

      <p style="font-size:13.5px; color:#8c7365; font-style:italic;">
        Mọi dữ liệu hình ảnh, âm thanh và tư liệu lịch sử được tham khảo trực tiếp từ ban quản lý di tích và phòng truyền thống văn hoá thông tin địa phương.
      </p>
    </div>
  `;
  openGlobalModal(title, body);
}

// Global modal dialog controls
function openGlobalModal(title, bodyHTML) {
  document.getElementById("globalModalTitle").textContent = title;
  document.getElementById("globalModalBody").innerHTML = bodyHTML;
  document.getElementById("globalModal").style.display = "flex";
}

function closeGlobalModal() {
  document.getElementById("globalModal").style.display = "none";

  // Dừng phát âm thanh thuyết minh phòng khi đóng modal
  const modalAudio = document.querySelector("#globalModalBody audio");
  if (modalAudio) {
    modalAudio.pause();
  }
}

// Close popup on click outside
window.addEventListener('click', (e) => {
  const gm = document.getElementById("globalModal");
  if (e.target === gm) {
    closeGlobalModal();
  }
});

// ===== INTRO AUDIO PLAYER =====
const introAudioEl = new Audio();
// introAudioEl.src = 'audio_tongquan.mp3'; // Đặt file audio tổng quan ở đây khi có
let introAudioPlaying = false;

function toggleIntroAudio() {
  if (!introAudioEl.src || introAudioEl.src === window.location.href) {
    alert('Audio thuyết minh đang được cập nhật. Vui lòng quay lại sau!');
    return;
  }
  if (introAudioPlaying) {
    introAudioEl.pause();
    introAudioPlaying = false;
  } else {
    introAudioEl.play();
    introAudioPlaying = true;
  }
  document.getElementById('introAudioPlayIcon').style.display = introAudioPlaying ? 'none' : 'block';
  document.getElementById('introAudioPauseIcon').style.display = introAudioPlaying ? 'block' : 'none';
}
introAudioEl.addEventListener('timeupdate', () => {
  if (!introAudioEl.duration) return;
  const pct = (introAudioEl.currentTime / introAudioEl.duration) * 100;
  document.getElementById('introAudioFill').style.width = pct + '%';
  const m = Math.floor(introAudioEl.currentTime / 60);
  const s = Math.floor(introAudioEl.currentTime % 60);
  document.getElementById('introAudioTime').textContent =
    `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
});
introAudioEl.addEventListener('ended', () => {
  introAudioPlaying = false;
  document.getElementById('introAudioPlayIcon').style.display = 'block';
  document.getElementById('introAudioPauseIcon').style.display = 'none';
  document.getElementById('introAudioFill').style.width = '0%';
});
function introAudioSeek(event) {
  if (!introAudioEl.duration) return;
  const track = document.getElementById('introAudioTrack');
  const rect = track.getBoundingClientRect();
  const ratio = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
  introAudioEl.currentTime = ratio * introAudioEl.duration;
}

// ===== LANGUAGE SYSTEM =====
let currentLang = 'vi';
function setLang(lang) {
  currentLang = lang;
  document.getElementById('btnVI').classList.toggle('active', lang === 'vi');
  document.getElementById('btnEN').classList.toggle('active', lang === 'en');
  document.querySelectorAll('[data-vi]').forEach(el => {
    const content = el.getAttribute('data-' + lang);
    if (content !== null) el.innerHTML = content;
  });
}

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('mainNavbar');
  if (!navbar) return;
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ===== MOBILE NAV TOGGLE =====
function toggleMobileNav() {
  document.getElementById('navLinks').classList.toggle('mobile-open');
}

// ===== PAGE NAVIGATION =====
function navigateToIntro() {
  // Auto close popups/drawers
  hideArtifactDrawer();
  closeGlobalModal();

  // Ẩn map, dừng audio
  const appEl = document.getElementById('appContainer');
  appEl.classList.remove('active');
  appEl.style.display = 'none';
  pauseAudio();

  // Hiện intro
  document.getElementById('introPage').classList.add('visible');
  document.getElementById('mainNavbar').classList.add('visible');
  document.body.classList.remove('map-mode');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  document.getElementById('navIntro').classList.add('active');
  document.getElementById('navMap').classList.remove('active');
  document.getElementById('navLinks').classList.remove('mobile-open');
}

function navigateToMap() {
  // Reset scroll position to top to prevent vertical offset shifts
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  // Auto close popups/drawers
  hideArtifactDrawer();
  closeGlobalModal();

  // Ẩn intro
  document.getElementById('introPage').classList.remove('visible');
  document.getElementById('navLinks').classList.remove('mobile-open');

  // Bật map-mode (overflow hidden)
  document.body.classList.add('map-mode');
  document.body.style.height = '100vh';

  // Hiện map
  const appEl = document.getElementById('appContainer');
  if (appEl) {
    appEl.style.display = 'block';
    appEl.classList.add('active');
  }
  
  // Luôn quay về sơ đồ 3d dinh chính đồng bộ ngay lập tức để tránh độ trễ layout
  showBuildingOverview();

  requestAnimationFrame(() => {
    try {
      map.invalidateSize();
    } catch (e) {
      console.warn("Failed to invalidate map size:", e);
    }
  });

  document.getElementById('navMap').classList.add('active');
  document.getElementById('navIntro').classList.remove('active');
}

// ===== LAUNCH APP (called from Splash Screen) =====
function launchApp() {
  const splash = document.getElementById('splashScreen');
  splash.style.opacity = 0;
  setTimeout(() => {
    splash.style.display = 'none';
    // Hiện navbar + trang giới thiệu
    document.getElementById('mainNavbar').classList.add('visible');
    document.getElementById('introPage').classList.add('visible');
    document.body.classList.remove('map-mode');
  }, 800);
}

// ===== RESIZE HANDLER =====
window.addEventListener('resize', () => {
  // Only invalidate Leaflet when in room mode (map is visible)
  if (currentViewMode === 'room') {
    map.invalidateSize();
  }
});

// Lắng nghe sự kiện click trên bản đồ để hỗ trợ lấy toạ độ marker cực nhanh
map.on('click', function (e) {
  const lat = e.latlng.lat;
  const lng = e.latlng.lng;

  if (currentViewMode === "building") {
    const pixelX = Math.round(lng);
    const pixelY = Math.round(currentViewHeight - lat);
    console.log(`%c[TOẠ ĐỘ MẶT TIỀN DINH] => roomId: X, x: ${pixelX}, y: ${pixelY}`, "color: #1d87e5; font-weight: bold; font-size: 12px;");
  } else {
    // Với ảnh trong phòng, hiển thị toạ độ pixel kèm theo xRatio, yRatio cho dễ copy paste vào danh sách artifacts
    const pixelX = Math.round(lng);
    const pixelY = Math.round(currentViewHeight - lat);
    const xRatio = (lng / currentViewWidth).toFixed(4);
    const yRatio = ((currentViewHeight - lat) / currentViewHeight).toFixed(4);
    console.log(`%c[TOẠ ĐỘ TRONG PHÒNG] => pixel: x: ${pixelX}, y: ${pixelY} | Cấu hình: xRatio: ${xRatio}, yRatio: ${yRatio}`, "color: #bd3107; font-weight: bold; font-size: 12px;");
  }
});

// Gắn sự kiện click-to-log để hỗ trợ đo đạc toạ độ 3D thực tế
const modelViewerEl = document.getElementById('dinhModel');
if (modelViewerEl) {
  modelViewerEl.addEventListener('click', (event) => {
    const rect = modelViewerEl.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const hit = modelViewerEl.positionAndNormalFromPoint(x, y);
    if (hit) {
      console.log(`%c[3D CLICK HIT] => Position: ${hit.position.x.toFixed(4)} ${hit.position.y.toFixed(4)} ${hit.position.z.toFixed(4)} | Normal: ${hit.normal.x.toFixed(4)} ${hit.normal.y.toFixed(4)} ${hit.normal.z.toFixed(4)}`, "color: #2e7d32; font-weight: bold; font-size: 13px;");
    }
  });

  // Tải Three.js Plane để che đậy mặt sau của Dinh (khớp hoàn toàn với kích thước thực tế của GLB)
  modelViewerEl.addEventListener('load', () => {
    try {
      // Tìm Symbol scene của model-viewer để can thiệp trực tiếp vào Three.js scene graph
      const sceneSymbol = Object.getOwnPropertySymbols(modelViewerEl).find(s => s.description === 'scene');
      const scene = sceneSymbol ? modelViewerEl[sceneSymbol] : null;
      
      if (!scene) {
        console.warn("[THREE.JS] Không tìm thấy Three.js scene trên model-viewer.");
        return;
      }
      
      // Tạo một mặt phẳng có chất liệu Standard có phản xạ ánh sáng tự nhiên trùng khớp với tường dinh
      const geometry = new THREE.PlaneGeometry(1.85, 1.3);
      const material = new THREE.MeshStandardMaterial({
        color: 0xead9b6, // Tông màu be trầm trùng với màu tường dinh mặt ngoài
        roughness: 0.85,
        metalness: 0.05,
        side: THREE.DoubleSide
      });
      const backWall = new THREE.Mesh(geometry, material);
      
      // Đặt tên
      backWall.name = "backWallCover";
      
      // Định vị sát cạnh sau cùng Z = -0.68 và dịch trọng tâm Y để che kín khoang rỗng bên trong
      backWall.position.set(0, -0.08, -0.675);
      backWall.rotation.y = Math.PI; // Quay mặt phẳng về phía sau
      
      scene.add(backWall);
      console.log("%c[THREE.JS] Đã tạo thành công bức tường 3D che phủ phẳng mặt sau dinh.", "color: #0288d1; font-weight: bold;");
    } catch (e) {
      console.error("[THREE.JS Error] Không thể chèn mesh che phủ:", e);
    }
  });
}

// Toggle room selection list on mobile
function toggleRoomPanel() {
  const panel = document.getElementById("roomPanel");
  if (panel) {
    panel.classList.toggle("collapsed-mobile");
  }
}

