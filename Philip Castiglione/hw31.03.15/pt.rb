require 'pry'

lines = {
  alameinLine: ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
  glenWaverlyLine: ['Flagstaff','Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
  sandringhamLine: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
}

# display stations and welcome
puts "Welcome to the silly terminal train thingo. These are the stations available: "
print "Alamein line: "
puts lines[:alameinLine]
print "Glen Waverly line: "
puts lines[:glenWaverlyLine]
print "Sandringham line: "
puts lines[:sandringhamLine]


def find_line(station, lines)
  if lines[:alameinLine].include?(station)
    :alameinLine
  elsif lines[:glenWaverlyLine].include?(station)
    :glenWaverlyLine
  elsif lines[:sandringhamLine].include?(station)
    :sandringhamLine
  else
    puts "LINE NOT DETECTED OMG"
    exit(0)
  end
end

# refactor this
# get start station input
start_station = ""
while !(lines[:alameinLine] | lines[:glenWaverlyLine] | lines[:sandringhamLine]).include?(start_station)
  print "Please enter starting station: "
  start_station = gets.chomp
end
start_line = find_line(start_station, lines)

# get end station input
end_station = ""
while !(lines[:alameinLine] | lines[:glenWaverlyLine] | lines[:sandringhamLine]).include?(end_station)
  print "Please enter final station: "
  end_station = gets.chomp
end
end_line = find_line(end_station, lines)

puts start_line
puts end_line

puts lines[start_line].index(start_station)

# check single station journey
if start_station == end_station
  puts "You traveled 1 stop."
  print "Your journey was: "
  puts start_station
  exit(0)
end

# check single line journey and fix Richmond
single_line_journey = false
if start_line == end_line
  single_line_journey = true
elsif start_station == "Richmond"
  start_line = end_line
  single_line_journey = true
elsif end_station == "Richmond"
  end_line = start_line
  single_line_journey = true
end

# binding(pry)
def calc_journey(station1, station2, line, lines)
  journey = []
  idx_station1 = lines[line].index(station1)
  idx_station2 = lines[line].index(station2)
  distance = (idx_station1 - idx_station2).abs + 1

  if idx_station1 > idx_station2
    journey = lines[line].slice(idx_station2, distance)
    journey.reverse!
  else
    journey = lines[line].slice(idx_station1, distance)
  end

  journey
end

if single_line_journey
  travel = calc_journey(start_station, end_station, start_line, lines)
  puts "You traveled #{travel.size} stops."
  print "Your journey was: "
  puts travel
  exit(0)
else
  travel = calc_journey(start_station, "Richmond", start_line, lines)
  travel += calc_journey("Richmond", end_station, end_line, lines).drop(1)
  puts "You traveled #{travel.size} stops."
  print "Your journey was: "
  puts travel
  exit(0)
end
