const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const lamp = document.getElementById ( 'lamp' );

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

function lampOn () {
    if ( !isLampBroken () ) {
        lamp.src = 'https://64.media.tumblr.com/a5028ebf41405b2226d373759ad842ee/b34b37ecf3633caa-14/s1280x1920/a110817c544bd0c8d109dd33be2e028a2e9ac4b3.png';
    }
}

function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src = 'https://64.media.tumblr.com/f1e60dda2cbd82fd85f1e3ff08ffe718/02ea9dfa912d4aa4-5b/s1280x1920/766efc45a3f507b6231cbb1bb7ebf2b6da5cf27b.png';
    }
}

function lampBroken () {
    lamp.src = 'https://64.media.tumblr.com/8c42fccaf5b2533c77c05a02305300eb/02ea9dfa912d4aa4-70/s1280x1920/e7eec5b278dfc6e85cf220e6823aab53ebb09db9.png';
}

turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );
lamp.addEventListener ( 'dblclick', lampBroken );