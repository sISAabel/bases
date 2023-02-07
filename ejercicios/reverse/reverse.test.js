const reverse = require('./reverse')

test('Test reverse;', () => {
  expect(reverse('Sólo hay una persona que puede decidir lo que voy a hacer, y soy yo mismo')).toBe('omsim oy yos y ,recah a yov euq ol ridiced edeup euq anosrep anu yah olóS')
})

test('Test reverse;', () => {
  expect(reverse('A veces la verdad no es lo suficientemente buena, a veces la gente merece más. A veces la gente merece que su fe sea recompensada')).toBe('adasnepmocer aes ef us euq ecerem etneg al secev A .sám ecerem etneg al secev a ,aneub etnemetneicifus ol se on dadrev al secev A')
})

test('Test reverse;', () => {
  expect(reverse('Citadme diciendo que me han citado mal')).toBe('lam odatic nah em euq odneicid emdatiC')
})
