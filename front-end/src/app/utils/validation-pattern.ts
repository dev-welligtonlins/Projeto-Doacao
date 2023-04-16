export default class ValidationPattern {

    static patterns: Array<{ name: string, pattern: string }> = [
        {
            name: "name",
            pattern: "^[a-zA-Z ÀÁÂÃÄÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝàáâãäçèéêëìíîïñòóôõöùúûüýÿ]*$"
        },
        {
            name: "corporate_name",
            pattern: "^[a-zA-Z0-9 ÀÁÂÃÄÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝàáâãäçèéêëìíîïñòóôõöùúûüýÿ-]*$"
        },
        {
            name: "title",
            pattern: "^[a-zA-Z0-9 ÀÁÂÃÄÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝàáâãäçèéêëìíîïñòóôõöùúûüýÿ]*$"
        },
        {
            name: "number",
            pattern: "^[0-9]*$"
        }, {
            name: "text",
            pattern: "^[a-zA-Z0-9 ÀÁÂÃÄÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝàáâãäçèéêëìíîïñòóôõöùúûüýÿ,.;/?@#!$%&=+-:]*$"
        },
        {
            name: "password",
            pattern: "^[a-zA-Z0-9 ÀÁÂÃÄÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝàáâãäçèéêëìíîïñòóôõöùúûüýÿ,.;/?@#!$%&=+-:_]*$"
        },
        {
            name: "link",
            pattern: "^[a-zA-Z0-9/?@#!$%&=+-:_]*$"
        },
        {
            name: "username",
            pattern: "^[a-zA-Z0-9.]*$"
        },
        {
            name: "date",
            pattern: "^[0-9-]*$"
        }
    ];

    static getPattern(patternName: string): string {
        let tmp = "^[ÿ]*$";
        this.patterns.forEach(function (pattern): string | void {
            if (pattern && pattern.name == patternName) {
                tmp = pattern.pattern;
            }
        });
        return tmp;
    }

}