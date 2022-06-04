import pandas as pd
import requests
import logging
from apyori import apriori


def get_associative_data(url):
    try:
        logging.log(msg='GETTING DATA...', level=1)
        data = requests.get('http://localhost:5020/api/v1/predictions/getdata')
        logging.log(msg='FINISHED GETTING DATA...', level=1)
    except requests.HTTPError:
        return logging.log(msg='ERROR WHILE GETTING DATA', level=1)

    data = dict(data.json()).get('data').get('data')
    data = pd.DataFrame(data)
    transactions: list = list()
    for i in range(len(data)):
        transactions.append([str(data.values[i, j]) for j in range(10)])
    rules = apriori(transactions, min_support=0.003, min_confidence=0.2, min_lift=3, min_length=2)
    results = list(rules)
    relevant = [results[i][0] for i, elms in enumerate(results)]
    results = list()
    for item_set in relevant:
        results.append([j for j in item_set])

    d = {'data': results}
    data_list = list()
    for i in d['data']:
        data_list.append({i[0]: [i[1], i[2]]})

    return {'data': data_list}
