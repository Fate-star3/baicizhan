import { sleep } from 'antd-mobile/es/utils/sleep'

let count = 0

export async function mockRequest() {
  if (count >= 5) {
    return []
  }
  await sleep(2000)
  count++
  return [
    {
        "id": 1,
        "title": "2022年大学英语四级考试大全套",
        "text": "包邮领加油券,开学必备",
        "price": "49",
        "fuhao": "￥",
        "del": "39",
        "imageSrc": "goods1.jpg",
        "num": "1.4万人付款"
    },
    {
        "id": 2,
        "title": "2022年大学英语四级考试大全套",
        "text": "包邮领加油券,开学必备",
        "price": "49",
        "fuhao": "￥",
        "del": "39",
        "imageSrc": "goods2.jpg",
        "num": "1.4万人付款"
    },
    {
        "id": 3,
        "title": "2022年大学英语四级考试大全套",
        "text": "包邮领加油券,开学必备",
        "price": "49",
        "fuhao": "￥",
        "del": "39",
        "imageSrc": "goods2.jpg",
        "num": "1.4万人付款"
    },
    {
        "id": 4,
        "title": "2022年大学英语四级考试大全套",
        "text": "包邮领加油券,开学必备",
        "price": "49",
        "fuhao": "￥",
        "del": "39",
        "imageSrc": "goods2.jpg",
        "num": "1.4万人付款"
    },
    {
        "id": 5,
        "title": "2022年大学英语四级考试大全套",
        "text": "包邮领加油券,开学必备",
        "price": "49",
        "fuhao": "￥",
        "del": "39",
        "imageSrc": "goods2.jpg",
        "num": "1.4万人付款"
    },
    {
        "id": 6,
        "title": "2022年大学英语四级考试大全套",
        "text": "包邮领加油券,开学必备",
        "price": "49",
        "fuhao": "￥",
        "del": "39",
        "imageSrc": "goods4.jpg",
        "num": "1.4万人付款"
    },
    {
        "id": 7,
        "title": "2022年大学英语四级考试大全套",
        "text": "包邮领加油券,开学必备",
        "price": "49",
        "fuhao": "￥",
        "del": "39",
        "imageSrc": "goods5.jpg",
        "num": "1.4万人付款"
    },
    {
        "id": 8,
        "title": "2022年大学英语四级考试大全套",
        "text": "包邮领加油券,开学必备",
        "price": "49",
        "fuhao": "￥",
        "del": "39",
        "imageSrc": "goods4.jpg",
        "num": "1.4万人付款"
    },
    {
        "id": 9,
        "title": "2022年大学英语四级考试大全套",
        "text": "包邮领加油券,开学必备",
        "price": "49",
        "fuhao": "￥",
        "del": "39",
        "imageSrc": "goods5.jpg",
        "num": "1.4万人付款"
    },
    {
        "id": 10,
        "title": "2022年大学英语四级考试大全套",
        "text": "包邮领加油券,开学必备",
        "price": "49",
        "fuhao": "￥",
        "del": "39",
        "imageSrc": "goods4.jpg",
        "num": "1.4万人付款"
    },
    {
        "id": 11,
        "title": "2022年大学英语四级考试大全套",
        "text": "包邮领加油券,开学必备",
        "price": "49",
        "fuhao": "￥",
        "del": "39",
        "imageSrc": "goods5.jpg",
        "num": "1.4万人付款"
    },
    {
        "id": 12,
        "title": "2022年大学英语四级考试大全套",
        "text": "包邮领加油券,开学必备",
        "price": "49",
        "fuhao": "￥",
        "del": "39",
        "imageSrc": "goods4.jpg",
        "num": "1.4万人付款"
    },
    {
        "id": 13,
        "title": "2022年大学英语四级考试大全套",
        "text": "包邮领加油券,开学必备",
        "price": "49",
        "fuhao": "￥",
        "del": "39",
        "imageSrc": "goods5.jpg",
        "num": "1.4万人付款"
    },
    {
        "id": 14,
        "title": "2022年大学英语四级考试大全套",
        "text": "包邮领加油券,开学必备",
        "price": "49",
        "fuhao": "￥",
        "del": "39",
        "imageSrc": "goods6.jpg",
        "num": "1.4万人付款"
    }
  ]
}