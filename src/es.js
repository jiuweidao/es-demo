import React from 'react';

import {post} from "./http";


export class Es {


    constructor(url) {
        this.url = url;
        this.body = {
            "query": {
                "bool": {
                    "filter": {
                        "range": {
                            "@timestamp": {}
                        }
                    }
                },


            },
            "sort": [
                {
                    "@timestamp": {
                        "order": "desc",
                        "unmapped_type": "boolean"
                    },
                }
            ],
        };
    }


    match(field, value) {
        return {"match": {[field]: value}}
    }

    queryString(query, fields = []) {
        return {
            "query_string": {
                "query": query,
                "fields": fields
            }
        }
    }

    //type must->and mustnot an33333d not should-> or
    search(type, value) {
        if (!this.body.query.bool[type]) {
            this.body.query.bool[type] = [];
        }
        this.body.query.bool[type].push(value)
    }

    from(from) {
        this.body.from = from;
    }

    size(size) {
        this.body.size = size;
    }

    timeRange(begin, end, formate = "yy-MM-dd") {
        if (begin)
            this.body.bool.filter.range["@timestamp"].gt = begin;
        if (end)
            this.body.bool.filter.range["@timestamp"].lt = end;
        this.body.bool.filter.range["@timestamp"].format = formate;
    }

    fetch() {
        let url = this.url;
        let body = JSON.stringify(this.body);
            // this.body;//JSON.stringify(this.body);

        return new Promise(function (resolve, reject) {
            post(url, body)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        })
    }

}
