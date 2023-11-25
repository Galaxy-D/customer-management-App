import { Injectable, Inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UtilitiesService {
    constructor(@Inject('Window') private window: Window) { }

    getApiUrl() {
        const port = this.getPort();
        if (process.env.NG_APP_API_URL) {
            return process.env.NG_APP_API_URL;
        }
        return `${this.window.location.protocol}//${this.window.location.hostname}${port}`;
    }

    private getPort() {
        const port = this.window.location.port;
        if (port) {
            // Running with local node (which serves Angular and the API)
            return ':' + this.window.location.port;
        }
        return '';
    }
}
