const Handlebars = require('Handlebars');

export const template = Handlebars.compile(`
    <div className="comments">
        {{#each comments}}
            <div className="comment">
                <h2>{{subject}}</h2>
                {{{body}}}
            </div>
        {{/each}}
    </div> 
`);