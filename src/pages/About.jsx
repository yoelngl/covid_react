import React from 'react';
import profile from './Profile.jpg'

function About(props) {
    return (
        <div>
            <div className="py-4">
                <div className="container text-white">
                    <img src={profile} width="200px" className="rounded-circle" alt="profile" />
                    <h1 className="mt-3">Author : <span className="text-primary">Yoel Gabriel Nainggolan</span></h1>
                    <a href="https://www.instagram.com/yoel_nainggolan/" target="_blank">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" className="mt-2" alt="Instagram" width="40px" />
                    </a>
                    <a href="mailto:yoelmarket123@gmail.com" target="_blank">
                        <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" className="ms-2 mt-2" alt="Gmail" width="50px" />
                    </a>
                    <a href="https://github.com/yoelngl" target="_blank">
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className="ms-2 mt-2" alt="Gmail" width="40px" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;