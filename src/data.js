export const birthdays = [
  {
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    name: 'Bertie Yates',
    age: 29,
  },
  {
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    name: 'Hester Hogan',
    age: 32,
  },
  {
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    name: 'Larry Little',
    age: 36,
  },
  {
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    name: 'Sean Walsh',
    age: 34,
  },
  {
    img: 'https://www.course-api.com/images/people/person-5.jpeg',
    name: 'Lola Gardner',
    age: 29,
  },
]
let num = 1;
birthdays.forEach(birthday => birthday.id = num++)

