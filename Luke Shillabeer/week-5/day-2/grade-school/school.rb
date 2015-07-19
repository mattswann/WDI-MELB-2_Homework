class School
  attr_reader :name, :db

  def initialize(name)
    @name = name
    @db = Hash.new( [] )
  end

  def add(student, grade)
    if @db.has_key? grade
      @db[grade].push(student)
    else
      @db[grade] = [student]
    end
  end

  def grade(value)
    return @db[value]
  end

  def sort()
    result = {}
    @db.sort.map do |key,value|
      result[key] = value
    end
    return result
  end

end
