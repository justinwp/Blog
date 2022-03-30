import ua from 'universal-analytics';
import type { Handler } from "@netlify/functions";

const visitor = ua('UA-224282906-1')

export const handler: Handler = (event, _, callback): void => {
    callback(null, {
        statusCode: 200,
        headers: {
            'Content-Type': 'image/svg+xml',
            'Cache-Control': 'no-cache, no-store, max-age=0, must-revalidate',
        },
        body: `<?xml version="1.0" encoding="iso-8859-1"?>
        <!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg version="1.1" fill="#eeeeee" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 229.5 229.5" style="enable-background:new 0 0 229.5 229.5;" xml:space="preserve">
        <path fill="#eeeeee"  d="M214.419,32.12c-0.412-2.959-2.541-5.393-5.419-6.193L116.76,0.275c-1.315-0.366-2.704-0.366-4.02,0L20.5,25.927
            c-2.878,0.8-5.007,3.233-5.419,6.193c-0.535,3.847-12.74,94.743,18.565,139.961c31.268,45.164,77.395,56.738,79.343,57.209
            c0.579,0.14,1.169,0.209,1.761,0.209s1.182-0.07,1.761-0.209c1.949-0.471,48.076-12.045,79.343-57.209
            C227.159,126.864,214.954,35.968,214.419,32.12z M174.233,85.186l-62.917,62.917c-1.464,1.464-3.384,2.197-5.303,2.197
            s-3.839-0.732-5.303-2.197l-38.901-38.901c-1.407-1.406-2.197-3.314-2.197-5.303s0.791-3.897,2.197-5.303l7.724-7.724
            c2.929-2.928,7.678-2.929,10.606,0l25.874,25.874l49.89-49.891c1.406-1.407,3.314-2.197,5.303-2.197s3.897,0.79,5.303,2.197
            l7.724,7.724C177.162,77.508,177.162,82.257,174.233,85.186z"/>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        </svg>
        `,
    })

    const { queryStringParameters } = event

    try {
        if (queryStringParameters && queryStringParameters.q) {

            const data = JSON.parse(Buffer.from(queryStringParameters.q, 'base64url').toString())

            data.ds = 'web';
            data.aip = '1';
            data.npa = '1';

            console.log(data);

            switch (data.t) {
                case 'pageview':
                    visitor.pageview(data).send()
                    break;
                case 'event':
                    visitor.event(data).send()
                    break;
                case 'exception':
                    visitor.exception(data).send()
                    break;
                case 'timing':
                    visitor.timing(data).send()
                    break;
            }
        }
    } catch (error) {
        console.log(error)
    }
}