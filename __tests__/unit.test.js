// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('accepts XXX-XXX-XXXX format', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);                     
});
test('accepts (XXX) XXX-XXXX format', () => {                           
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);                   
});
test('rejects digits with no dashes', () => {                           
  expect(isPhoneNumber('1234567890')).toBe(false);                      
});
test('rejects letters', () => {                                         
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);                    
});

test('accepts a normal email', () => {                                  
  expect(isEmail('user@example.com')).toBe(true);       
});
test('accepts underscore in username and domain', () => {
  expect(isEmail('user_name@my_site.co')).toBe(true);                   
});                                                                     
test('rejects email missing @', () => {                                 
  expect(isEmail('userexample.com')).toBe(false);                       
});                                                     
test('rejects dot in username (\\w+ does not allow dots)', () => {
  expect(isEmail('first.last@example.com')).toBe(false);                
});

test('accepts 4-char password starting with letter', () => {
  expect(isStrongPassword('Abcd')).toBe(true);                          
});
test('accepts letters, digits, and underscores', () => {                
  expect(isStrongPassword('Abc_123')).toBe(true);                       
});                                                                     
test('rejects password shorter than 4 characters', () => {
  expect(isStrongPassword('Abc')).toBe(false);                          
});                                                                     
test('rejects password longer than 15 characters', () => {
  expect(isStrongPassword('Abcdefghijklmnop')).toBe(false);             
});                                                                     

test('accepts MM/DD/YYYY format', () => {
  expect(isDate('12/25/2024')).toBe(true);
});
test('accepts single-digit month and day', () => {                      
  expect(isDate('1/5/2024')).toBe(true);
});                                                                     
test('rejects 2-digit year', () => {                    
  expect(isDate('12/25/24')).toBe(false);                               
});
test('rejects dashes instead of slashes', () => {                       
  expect(isDate('12-25-2024')).toBe(false);             
});                                                                     

test('accepts 6-digit hex with #', () => {
  expect(isHexColor('#FFAA33')).toBe(true);
});                                                                     
test('accepts 3-digit hex with #', () => {
  expect(isHexColor('#FA3')).toBe(true);                                
});                                                     
test('rejects non-hex characters', () => {                              
  expect(isHexColor('#ZZZZZZ')).toBe(false);                            
});
test('rejects 4-character hex', () => {                                 
  expect(isHexColor('#FFFF')).toBe(false);                              
});