def recursiveList(inputList, name):
  print inputList
  if inputList[1][1:2] == []:
    print "[]"
    return "{} || ".format(name)
  attrName = inputList[0]
  attrVal  = inputList[1][0]
  result   = recursiveList(inputList[1][1], name)
  return "{} {}: {} || ".format(result, attrName, attrVal)

testArr = ["Squirtle",["HP",[44,["Attack",[48,["Defense",[65,["Speed",[43]]]]]]]]]

print(recursiveList(testArr[1], testArr[0]))[:-4]
