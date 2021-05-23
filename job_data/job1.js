
var job1 = function(orderId) {
  return {
    "job": {
      "assignment_code": "ACC861MM",
      "pickups": [
        {
          "address": "Carrer de la Providència 114B, 08024 Barcelona",
          "comment": "Ask Bobby",
          "contact": {
            "firstname": "Bobby",
            "lastname": "Brown",
            "phone": "+33610101010",
            "email": "bobby.brown@pizzahut.com",
            "company": "Pizza Hut"
          }
        }
      ],
      "dropoffs": [
        {
          "package_type": "small",
          "package_description": "The blue one.",
          "client_reference": orderId,
          "address": "Carrer de la Riera Baixa 22, 08001, Barcelona, Spain",
          "comment": "2nd floor on the left",
          "contact": {
            "firstname": "Dany",
            "lastname": "Dan",
            "phone": "+33611112222",
            "email": "client1@email.com",
            "company": "Sample Company Inc."
          }
        }
      ]
    }
  }
}

module.exports = job1