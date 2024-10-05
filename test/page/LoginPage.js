const request = require("supertest");

class LoginPage {
  constructor(url) {
    this.url = url;
  }

  // Non admin role
  async loginXltest2() {
    const response = await request(this.url)
      .post("/common/oauth2/token") 
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({ 
        grant_type: "password", 
        client_id: "6397ae15-5bb6-49ca-9b43-942080837647",
        client_secret: "2G08Q~_.3xqpzJxdr-_lxgHSwTHDxdsq3QQKfb2Q", 
        userName: "xl.test2@xl.co.id", 
        password: "dC!23W433Kk%",
        resource: "https://graph.microsoft.com/"
      }); 

    return response.body;
  }

  async loginXltest4() {
    const response = await request(this.url)
      .post("/common/oauth2/token") 
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({ 
        grant_type: "password", 
        client_id: "6397ae15-5bb6-49ca-9b43-942080837647",
        client_secret: "2G08Q~_.3xqpzJxdr-_lxgHSwTHDxdsq3QQKfb2Q", 
        userName: "xl.test4@xl.co.id", 
        password: "BsFM1984t*Hg",
        resource: "https://graph.microsoft.com/"
      }); 

    return response.body;
  }

  async loginXltest6() {
    const response = await request(this.url)
      .post("/common/oauth2/token") 
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({ 
        grant_type: "password", 
        client_id: "6397ae15-5bb6-49ca-9b43-942080837647",
        client_secret: "2G08Q~_.3xqpzJxdr-_lxgHSwTHDxdsq3QQKfb2Q", 
        userName: "xl.test6a@xl.co.id", 
        password: "o564E8iJRi&N",
        resource: "https://graph.microsoft.com/"
      }); 

    return response.body;
  }

  async loginUnauthorized() {
    const response = await request(this.url)
      .post("/common/oauth2/token") 
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({ 
        grant_type: "password", 
        client_id: "6397ae15-5bb6-49ca-9b43-942080837647",
        client_secret: "2G08Q~_.3xqpzJxdr-_lxgHSwTHDxdsq3QQKfb2Q", 
        userName: "argavi.koto@axiatadigitallabs.com", 
        password: "R@hasia*01",
        resource: "https://graph.microsoft.com/"
      }); 

    return response.body;
  }

  async loginNonAzure() {
    const response = await request(this.url)
      .post("/common/oauth2/token") 
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({ 
        grant_type: "password", 
        client_id: "6397ae15-5bb6-49ca-9b43-942080837647",
        client_secret: "2G08Q~_.3xqpzJxdr-_lxgHSwTHDxdsq3QQKfb2Q", 
        userName: "argavi@gmail.com", 
        password: "R@hasia*01",
        resource: "https://graph.microsoft.com/"
      }); 

    return response.body;
  }

  async loginEmptyUsername() {
    const response = await request(this.url)
      .post("/common/oauth2/token") 
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({ 
        grant_type: "password", 
        client_id: "6397ae15-5bb6-49ca-9b43-942080837647",
        client_secret: "2G08Q~_.3xqpzJxdr-_lxgHSwTHDxdsq3QQKfb2Q", 
        userName: "", 
        password: "R@hasia*01",
        resource: "https://graph.microsoft.com/"
      }); 

    return response.body;
  }

  async loginInvalidPassword() {
    const response = await request(this.url)
      .post("/common/oauth2/token") 
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({ 
        grant_type: "password", 
        client_id: "6397ae15-5bb6-49ca-9b43-942080837647",
        client_secret: "2G08Q~_.3xqpzJxdr-_lxgHSwTHDxdsq3QQKfb2Q", 
        userName: "xl.test4@xl.co.id", 
        password: "R@hasia*01",
        resource: "https://graph.microsoft.com/"
      }); 

    return response.body;
  }

  async loginByToken(accessToken, deviceID) {
    const response = await request(this.url)
      .post("/user/loginByToken") 
      .send({ 
        token: accessToken,
        deviceID: deviceID
      });

    return response.body;
  }

  async loginNonXlMember(userID, password) {
    const response = await request(this.url)
      .post("/user/loginById") 
      .send({ 
        userID: "Abyan.ferz@gmail.com",
        password: "Qpj#&DOITW#3",
        deviceID: "5d8daf3e-0233-4a96-b664-8af1eb925646"
      });

    return response.body;
  }
}

module.exports = LoginPage;