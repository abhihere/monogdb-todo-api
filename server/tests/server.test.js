const expect = require('expect');
const request = require('supertest');

var {app} = require('./../server');
var {Todo} = require('./../models/todo');

var todos = [{
  text: 'First todo'
},{
  text: 'Second todo'
}];

beforeEach((done)=>{
  Todo.remove({}).then(()=>{
    Todo.insertMany(todos);
  }).then(()=>{
    done()
  });
});

describe('POST /todo', ()=>{
  it('Should create a new todo', (done)=>{
    var text = 'Test todo text';
    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res)=>{
        expect(res.body.text).toBe(text);
    })
    .end((err, res)=>{
      if(err){
        return done(err);
      }
      Todo.find({text}).then((todos)=>{
        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);
        done();
      }).catch((e)=>{
        done(e)
      });
    });
  });
});

describe('GET /todos', ()=>{
  it('Should get all the todos', (done)=>{
    request(app)
    .get('/todos')
    .expect(200)
    .expect((res)=>{
      expect(res.body.todos.length).toBe(2);
    })
    .end(done);
  });
});
