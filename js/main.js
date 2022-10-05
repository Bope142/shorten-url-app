const CopyPasswordToClipboard = (textElmentInput) => {
    try {
        if (textElmentInput.value.length > 0) {
            textElmentInput.select();
            textElmentInput.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(textElmentInput.value);
            window.navigator.vibrate(300);
            document.querySelector('.message__bulle').innerHTML = "l'url a été copiée avec succès !"
            document.querySelector('.message__bulle').classList.replace('messahe__error', 'messahe__succes')
            document.querySelector('.message__bulle').classList.replace('message__bulle_hide', 'message__bulle_visible')
            let id = setTimeout(() => {
                document.querySelector('.message__bulle').classList.replace('messahe__error', 'messahe__succes')
                document.querySelector('.message__bulle').classList.replace('message__bulle_visible', 'message__bulle_hide')
                clearTimeout(id)
            }, 2500)

        }
    } catch {
        console.log('error on copy password to clipboard...')
    }

}


let db = null
let inputTextCopy = document.createElement('input')
inputTextCopy.setAttribute('type', 'text')
inputTextCopy.setAttribute('id', 'inputCopy')
const getDateCreated = () => {
    const d = new Date();
    let dateConte = {
        day: '0',
        month: '0',
        year: '0',
        hours: '0',
        minute: '0',
        sec: '0'

    }
    if (d.getDate() < 10) {
        dateConte.day = '0' + d.getDate().toString()
    } else {
        dateConte.day = d.getDate().toString()
    }
    if (d.getMonth() < 10) {
        dateConte.month = '0' + d.getMonth().toString()
    } else {
        dateConte.month = d.getMonth().toString()
    }
    if (d.getHours() < 10) {
        dateConte.hours = '0' + d.getHours().toString()
    } else {
        dateConte.hours = d.getHours().toString()
    }
    if (d.getMinutes() < 10) {
        dateConte.minute = '0' + d.getMinutes().toString()
    } else {
        dateConte.minute = d.getMinutes().toString()
    }
    if (d.getSeconds() < 10) {
        dateConte.sec = '0' + d.getSeconds().toString()
    } else {
        dateConte.sec = d.getSeconds().toString()
    }
    dateConte.year = d.getYear().toString()
    return `${dateConte.day}-${dateConte.month}-${dateConte.year}  ${dateConte.hours}:${dateConte.minute}:${dateConte.sec}`
}

const copyUrl = () => {
    document.querySelectorAll('.btn-copy').forEach(btnCopy => {
        btnCopy.addEventListener('click', () => {
            CopyPasswordToClipboard(document.querySelector('#result-url-edit'))
        })
    })
}


const urlHistory = () => {
    let tx = db.transaction('urlStore', 'readonly');
    let recordUrl = tx.objectStore('urlStore');
    let getRequest = recordUrl.getAll();
    getRequest.onsuccess = (e) => {

        if (e.target.result.length === 0) {
            document.querySelector('#history__section').style.height = "60vh"
            document.querySelector('#history__section').innerHTML = '<span class="empty-text"> historique vide </span>';
        } else {
            document.querySelector('#history__section')
                .innerHTML = '';
            e.target.result.reverse().forEach(data => {
                document.querySelector('#history__section').style.height = "auto"
                document.querySelector('#history__section')
                    .innerHTML += `    <div class="link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="ico">
                        <path d="M24 4C23.93 4 23.849297 3.9997656 23.779297 4.0097656C21.479297 4.2697656 19.060312 8.57 17.820312 15L30.179688 15C28.939688 8.57 26.520703 4.2697656 24.220703 4.0097656C24.150703 3.9997656 24.07 4 24 4 z M 18.300781 4.8300781C12.980781 6.4000781 8.590625 10.13 6.140625 15L14.769531 15C15.469531 11 16.660781 7.3800781 18.300781 4.8300781 z M 29.699219 4.8300781C31.339219 7.3800781 32.530469 11 33.230469 15L41.859375 15C39.409375 10.13 35.019219 6.4000781 29.699219 4.8300781 z M 14.638672 18.027344 A 1.250125 1.250125 0 0 0 13.464844 19.103516L12.642578 24.261719L11.146484 20.804688 A 1.250125 1.250125 0 0 0 8.8535156 20.804688L7.3574219 24.261719L6.5351562 19.103516 A 1.250125 1.250125 0 0 0 5.3300781 18.033203 A 1.250125 1.250125 0 0 0 4.0664062 19.496094L5.5664062 28.896484 A 1.250125 1.250125 0 0 0 7.9472656 29.195312L10 24.447266L12.052734 29.195312 A 1.250125 1.250125 0 0 0 14.433594 28.896484L15.933594 19.496094 A 1.250125 1.250125 0 0 0 14.638672 18.027344 z M 28.638672 18.027344 A 1.250125 1.250125 0 0 0 27.464844 19.103516L26.642578 24.261719L25.146484 20.804688 A 1.250125 1.250125 0 0 0 22.853516 20.804688L21.357422 24.261719L20.535156 19.103516 A 1.250125 1.250125 0 0 0 19.330078 18.033203 A 1.250125 1.250125 0 0 0 18.066406 19.496094L19.566406 28.896484 A 1.250125 1.250125 0 0 0 21.947266 29.195312L24 24.447266L26.052734 29.195312 A 1.250125 1.250125 0 0 0 28.433594 28.896484L29.933594 19.496094 A 1.250125 1.250125 0 0 0 28.638672 18.027344 z M 42.638672 18.027344 A 1.250125 1.250125 0 0 0 41.464844 19.103516L40.642578 24.261719L39.146484 20.804688 A 1.250125 1.250125 0 0 0 36.853516 20.804688L35.357422 24.261719L34.535156 19.103516 A 1.250125 1.250125 0 0 0 33.330078 18.033203 A 1.250125 1.250125 0 0 0 32.066406 19.496094L33.566406 28.896484 A 1.250125 1.250125 0 0 0 35.947266 29.195312L38 24.447266L40.052734 29.195312 A 1.250125 1.250125 0 0 0 42.433594 28.896484L43.933594 19.496094 A 1.250125 1.250125 0 0 0 42.638672 18.027344 z M 6.140625 33C8.590625 37.87 12.980781 41.599922 18.300781 43.169922C16.660781 40.619922 15.469531 37 14.769531 33L6.140625 33 z M 17.820312 33C19.060312 39.43 21.479297 43.730234 23.779297 43.990234C23.849297 44.000234 23.93 44 24 44C24.07 44 24.150703 44.000234 24.220703 43.990234C26.520703 43.730234 28.939688 39.43 30.179688 33L17.820312 33 z M 33.230469 33C32.530469 37 31.339219 40.619922 29.699219 43.169922C35.019219 41.599922 39.409375 37.87 41.859375 33L33.230469 33 z" fill="#FFFFFF" />
                    </svg>
                    <div class="content__details">
                        <div class="link__details">
                            <a href="${data.urlShort}" class="links__shortened">${data.urlShort}</a>
                            <a href="${data.urlOriginal}" class="links__orginal">${data.urlOriginal}</a>
                            <span class="date__shortened">${data.created}</span>
                        </div>
                        <div class="controll__links">
                            <button class="btn-delete-link" data-id-url="${data.id}">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                                    <path d="M16.59375 0.125C15.214844 0.1875 13.902344 0.789063 12.875 1.8125L8.84375 5.84375C9.476563 5.207031 11.839844 5.621094 12.40625 6.1875L14.8125 3.78125C15.351563 3.246094 16.058594 2.90625 16.75 2.875C17.21875 2.851563 17.882813 2.945313 18.46875 3.53125C19.011719 4.078125 19.125 4.726563 19.125 5.15625C19.125 5.878906 18.785156 6.621094 18.21875 7.1875L14 11.40625C12.933594 12.46875 11.28125 12.59375 10.34375 11.65625C9.808594 11.121094 8.945313 11.121094 8.40625 11.65625C7.871094 12.191406 7.871094 13.054688 8.40625 13.59375C9.375 14.558594 10.660156 15.03125 11.96875 15.03125C13.382813 15.03125 14.828125 14.484375 15.9375 13.375L20.1875 9.125C21.265625 8.046875 21.875 6.605469 21.875 5.15625C21.875 3.816406 21.351563 2.539063 20.40625 1.59375C19.394531 0.582031 18.03125 0.0585938 16.59375 0.125 Z M 10.03125 6.96875C8.617188 6.96875 7.171875 7.515625 6.0625 8.625L1.8125 12.875C0.734375 13.953125 0.125 15.394531 0.125 16.84375C0.125 18.1875 0.648438 19.460938 1.59375 20.40625C2.605469 21.417969 3.96875 21.941406 5.40625 21.875C6.785156 21.8125 8.101563 21.210938 9.125 20.1875L13.15625 16.15625C12.523438 16.792969 10.164063 16.378906 9.59375 15.8125L7.1875 18.21875C6.648438 18.753906 5.941406 19.09375 5.25 19.125C4.78125 19.148438 4.117188 19.054688 3.53125 18.46875C2.988281 17.921875 2.875 17.273438 2.875 16.84375C2.875 16.121094 3.214844 15.378906 3.78125 14.8125L8 10.59375C9.066406 9.53125 10.71875 9.40625 11.65625 10.34375C12.191406 10.878906 13.054688 10.878906 13.59375 10.34375C14.128906 9.808594 14.128906 8.945313 13.59375 8.40625C12.625 7.441406 11.335938 6.96875 10.03125 6.96875 Z M 18.0625 16.0625C17.898438 16.0625 17.75 16.125 17.625 16.25L16.25 17.625C16 17.871094 16 18.25 16.25 18.5L18.75 21L16.25 23.5C16 23.746094 16 24.125 16.25 24.375L17.625 25.75C17.871094 26 18.25 26 18.5 25.75L21 23.25L23.5 25.75C23.746094 26 24.125 26 24.375 25.75L25.75 24.375C26 24.125 26 23.746094 25.75 23.5L23.25 21L25.75 18.5C26 18.253906 26 17.871094 25.75 17.625L24.375 16.25C24.125 16 23.746094 16 23.5 16.25L21 18.75L18.5 16.25C18.375 16.125 18.226563 16.0625 18.0625 16.0625Z" fill="#FFFFFF" />
                                </svg> Supprimer
                            </button>
                            <button class="btn-copy-link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                                    <path d="M4 0C1.796875 0 0 1.796875 0 4L0 18C0 20.203125 1.796875 22 4 22L7 22L7 20L4 20C2.894531 20 2 19.105469 2 18L2 4C2 2.894531 2.894531 2 4 2L10.28125 2C10.433594 2.039063 10.5625 2.121094 10.65625 2.21875C11.089844 2.097656 11.53125 2 12 2L13.0625 2C11.773438 0.71875 10.902344 0 10 0 Z M 12 3C9.796875 3 8 4.796875 8 7L8 22C8 24.203125 9.796875 26 12 26L22 26C24.203125 26 26 24.203125 26 22L26 11C26 9.9375 25.027344 8.929688 23.28125 7.21875C23.039063 6.980469 22.777344 6.714844 22.53125 6.46875C22.285156 6.222656 22.019531 5.992188 21.78125 5.75C20.070313 4.003906 19.0625 3 18 3 Z M 12 5L18.28125 5C19.003906 5.183594 19 6.050781 19 6.9375L19 9C19 9.550781 19.449219 10 20 10L22 10C22.996094 10 24 10.003906 24 11L24 22C24 23.105469 23.105469 24 22 24L12 24C10.894531 24 10 23.105469 10 22L10 7C10 5.894531 10.894531 5 12 5 Z M 19.53125 12.09375C18.90625 12.125 18.308594 12.378906 17.84375 12.84375L16.59375 14.125C16.878906 13.835938 17.929688 14.023438 18.1875 14.28125L18.71875 13.71875C18.964844 13.476563 19.28125 13.328125 19.59375 13.3125C19.804688 13.300781 20.109375 13.359375 20.375 13.625C20.621094 13.875 20.6875 14.148438 20.6875 14.34375C20.6875 14.671875 20.539063 15.023438 20.28125 15.28125L17.96875 17.5625C17.488281 18.042969 16.738281 18.113281 16.3125 17.6875C16.070313 17.445313 15.679688 17.445313 15.4375 17.6875C15.195313 17.929688 15.195313 18.320313 15.4375 18.5625C15.875 19 16.46875 19.21875 17.0625 19.21875C17.703125 19.21875 18.339844 18.972656 18.84375 18.46875L21.15625 16.15625C21.644531 15.667969 21.9375 15 21.9375 14.34375C21.9375 13.738281 21.679688 13.179688 21.25 12.75C20.792969 12.292969 20.179688 12.066406 19.53125 12.09375 Z M 16.78125 14.9375C16.140625 14.9375 15.5 15.214844 15 15.71875L12.84375 17.84375C12.355469 18.332031 12.0625 19 12.0625 19.65625C12.0625 20.265625 12.320313 20.820313 12.75 21.25C13.210938 21.707031 13.816406 21.9375 14.46875 21.90625C15.089844 21.875 15.691406 21.621094 16.15625 21.15625L17.25 20.03125C16.964844 20.320313 15.914063 20.132813 15.65625 19.875L15.28125 20.28125C15.035156 20.523438 14.71875 20.671875 14.40625 20.6875C14.195313 20.699219 13.890625 20.640625 13.625 20.375C13.378906 20.128906 13.3125 19.851563 13.3125 19.65625C13.3125 19.328125 13.460938 18.976563 13.71875 18.71875L15.875 16.59375C16.359375 16.113281 17.074219 16.046875 17.5 16.46875C17.742188 16.710938 18.164063 16.710938 18.40625 16.46875C18.648438 16.226563 18.648438 15.835938 18.40625 15.59375C17.96875 15.15625 17.375 14.9375 16.78125 14.9375Z" fill="#FFFFFF" />
                                </svg>
                                Copier
                            </button>
                        </div>
                    </div>

                </div>

  `
            })
            EventUrlHistory()
        }

    }
}

const deleteUrl = (id) => {
    let tx = db.transaction('urlStore', 'readwrite');
    let Store = tx.objectStore('urlStore');
    let deleteRequest = Store.delete(parseInt(id));
    deleteRequest.onsuccess = (e) => {
        document.querySelector('.message__bulle').innerHTML = "l'url a été supprimée avec succès !"
        document.querySelector('.message__bulle').classList.replace('messahe__error', 'messahe__succes')
        document.querySelector('.message__bulle').classList.replace('message__bulle_hide', 'message__bulle_visible')
        let id = setTimeout(() => {
            document.querySelector('.message__bulle').classList.replace('messahe__error', 'messahe__succes')
            document.querySelector('.message__bulle').classList.replace('message__bulle_visible', 'message__bulle_hide')
            clearTimeout(id)
        }, 2000)
    }
    deleteRequest.onerror = (e) => {
        document.querySelector('.message__bulle').innerHTML = " Oups ! une erreur s'est produite."
        document.querySelector('.message__bulle').classList.replace('messahe__succes', 'messahe__error')
        document.querySelector('.message__bulle').classList.replace('message__bulle_hide', 'message__bulle_visible')
        let id = setTimeout(() => {
            document.querySelector('.message__bulle').classList.replace('messahe__succes', 'messahe__error')
            document.querySelector('.message__bulle').classList.replace('message__bulle_visible', 'message__bulle_hide')
            clearTimeout(id)
        }, 2000)
    }
}

const EventUrlHistory = () => {
    document.querySelectorAll('.btn-copy-link').forEach(btnCopy => {
        btnCopy.addEventListener('click', () => {
            inputTextCopy.value = btnCopy.parentNode.parentNode.children[0].children[0].innerText
            CopyPasswordToClipboard(inputTextCopy)
        })
    })
    document.querySelectorAll('.btn-delete-link').forEach(btnDelete => {
        btnDelete.addEventListener('click', () => {

            idUrl = parseInt(btnDelete.getAttribute('data-id-url'))
            btnDelete.parentNode.parentNode.parentNode.classList.add('link__remove')
            let id = setTimeout(() => {
                deleteUrl(idUrl)
                btnDelete.parentNode.parentNode.parentNode.remove()
                clearTimeout(id)
                urlHistory()
            }, 500)

        })
    })


}

async function addUrlHitory(shortLinks, originalLiks, dateCreated) {
    let idUrl = 0;
    (function generateUniqueID() {
        let tx = db.transaction('urlStore', 'readonly');
        let recordUrl = tx.objectStore('urlStore');
        let getRequest = recordUrl.getAll();
        getRequest.onsuccess = (e) => {
            console.log(e.target.result.length)
            idUrl = e.target.result.length + 1
        }
    })()
    setTimeout(() => {
        let url = {
            id: idUrl,
            urlShort: shortLinks,
            urlOriginal: originalLiks,
            created: dateCreated
        }
        let tx = db.transaction('urlStore', 'readwrite');
        tx.onerror = (err) => {
            console.warn(err)
        }
        let store = tx.objectStore('urlStore')
        let requestAdd = store.add(url)
        requestAdd.onsuccess = (e) => {
            urlHistory()
        }
        requestAdd.onerror = (err) => {
            console.warn(err)
        }
    }, 100)


}
const mobileMenu = () => {
    document.querySelector('.menu-mobile').addEventListener('click', () => {
        document.querySelector('.menu-mobile').classList.toggle('menu-mobile-active')
        document.querySelector('.mobile__menu').classList.toggle('mobile__menu-active')
        if (document.querySelector('.mobile__menu').classList.contains('mobile__menu-active')) {
            document.querySelector('.container__header').style.boxShadow = 'none'

        } else {
            let idTimer = setTimeout(() => {
                document.querySelector('.container__header').style.boxShadow = `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`
                clearTimeout(idTimer)
            }, 490)
        }
    })
}

const itemNavStyle = (index, mobileScreen) => {
    if (mobileScreen) {
        document.querySelectorAll('.mobile__menu .menu__nav').forEach(nav => nav.classList.remove('menu__nav_active'))
        document.querySelectorAll('.mobile__menu .menu__nav')[index].classList.add('menu__nav_active')
    } else {
        document.querySelectorAll('.container__header nav .menu__nav').forEach(nav => nav.classList.remove('menu__nav_active'))
        document.querySelectorAll('.container__header nav .menu__nav')[index].classList.add('menu__nav_active')
    }

}

const navApp = () => {
    document.querySelectorAll('.mobile__menu .menu__nav').forEach((navItem, index) => {
        navItem.addEventListener('click', () => {
            itemNavStyle(index, true)
            switch (index) {
                case 0: {
                    document.querySelectorAll('.app__page').forEach(appScreen => appScreen.classList.replace('app__page_show', 'app__page_hide'))
                    document.querySelector('#home__section').classList.replace('app__page_hide', 'app__page_show')
                }
                break;
            case 1: {
                document.querySelectorAll('.app__page').forEach(appScreen => appScreen.classList.replace('app__page_show', 'app__page_hide'))
                document.querySelector('#history__section').classList.replace('app__page_hide', 'app__page_show')
            }
            break;

            }
        })

    })
    document.querySelectorAll('.container__header nav .menu__nav').forEach((navItem, index) => {
        navItem.addEventListener('click', () => {
            itemNavStyle(index, false)
            switch (index) {
                case 0: {
                    document.querySelectorAll('.app__page').forEach(appScreen => appScreen.classList.replace('app__page_show', 'app__page_hide'))
                    document.querySelector('#home__section').classList.replace('app__page_hide', 'app__page_show')
                }
                break;
            case 1: {
                document.querySelectorAll('.app__page').forEach(appScreen => appScreen.classList.replace('app__page_show', 'app__page_hide'))
                document.querySelector('#history__section').classList.replace('app__page_hide', 'app__page_show')
            }
            break;

            }
        })
    })
}


const shortendedBtn = () => {
    document.querySelector('#shorten__btn').addEventListener('click', () => {
        if (document.querySelector('#urlShorten').value === '') {
            document.querySelector('#urlShorten').focus()
        } else {
            document.querySelector('#shorten__btn').classList.add('loading__request')
            renderUsers()

        }

    })
}

async function ShorteningLink(links) {
    let url = `https://api.shrtco.de/v2/shorten?url=${links}`;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        document.querySelector('#shorten__btn').classList.remove('loading__request')
        document.querySelector('.message__bulle').innerHTML = " Oups ! une erreur s'est produite."
        document.querySelector('.message__bulle').classList.replace('messahe__succes', 'messahe__error')
        document.querySelector('.message__bulle').classList.replace('message__bulle_hide', 'message__bulle_visible')
        let id = setTimeout(() => {
            document.querySelector('.message__bulle').classList.replace('messahe__succes', 'messahe__error')
            document.querySelector('.message__bulle').classList.replace('message__bulle_visible', 'message__bulle_hide')
            clearTimeout(id)
        }, 2500)
        //console.log(error);
    }
}

async function renderUsers() {
    let urlShort = await ShorteningLink(document.querySelector('#urlShorten').value);
    if (urlShort.ok) {
        getLinksInfo(urlShort.result.code, urlShort.result.full_short_link)
        document.querySelector('#result-url-edit').value = urlShort.result.full_short_link
        document.querySelector('.modal__result_shorten-url').classList.replace('modal__hide', 'modal__show')
        document.querySelector('#shorten__btn').classList.remove('loading__request')
    } else {
        document.querySelector('#shorten__btn').classList.remove('loading__request')
        document.querySelector('.message__bulle').innerHTML = " Oups ! une erreur s'est produite."
        document.querySelector('.message__bulle').classList.replace('messahe__succes', 'messahe__error')
        document.querySelector('.message__bulle').classList.replace('message__bulle_hide', 'message__bulle_visible')
        let id = setTimeout(() => {
            document.querySelector('.message__bulle').classList.replace('messahe__succes', 'messahe__error')
            document.querySelector('.message__bulle').classList.replace('message__bulle_visible', 'message__bulle_hide')
            clearTimeout(id)

        }, 2500)
    }

}
async function getLinksInfo(codeLinks, linkShort) {
    let url = `https://api.shrtco.de/v2/info?code=${codeLinks}`
    try {
        let res = await fetch(url);
        let infosLinks = await res.json();

        addUrlHitory(linkShort, infosLinks.result.url, getDateCreated())
    } catch (error) {
        console.log(error);
    }
}
const closeModal = () => {
    document.querySelector('.btn__close-modal').addEventListener('click', () => {
        document.querySelector('.modal__result_shorten-url').classList.replace('modal__show', 'modal__hide')
    })
}


window.addEventListener('load', () => {
    const IDB = (function init() {
        let objectStore = null
        let DBOpenReq = indexedDB.open('shortened-url-db', 1)

        DBOpenReq.addEventListener('error', (err) => {
            console.warn(err)
        })
        DBOpenReq.addEventListener('success', (e) => {
            db = e.target.result
            urlHistory()
        })
        DBOpenReq.addEventListener('upgradeneeded', (e) => {
            db = e.target.result
            console.log('upgrad ', db)
            if (!db.objectStoreNames.contains('urlStore')) {
                objectStore = db.createObjectStore('urlStore', {
                    keyPath: 'id'
                })
            }
        })
    })()

    mobileMenu()
    navApp()
    shortendedBtn()
    closeModal()
    copyUrl()
    document.querySelector('.loading__screen').style.display = "none"
})
