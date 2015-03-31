@train_lines = {
  'Alamein' => ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
  'Glen Waverly' => ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
  'Sandringham' => ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'],
  'Imaginary Line' => ['Bourke','Flinders Street' , 'Elizabeth', 'Swan Station','Kooyong','Burnley', 'Prada', 'Sprinster']
};

# start_line = 'Alamein'
start_station = 'Elizabeth'
# end_line = 'Alamein'
# end_station = 'Glenferrie'
# end_line = 'Imaginary Line'
end_station = 'Tooronga'

def all_intersections(train_lines)
  all_stations = train_lines.values.flatten
  return all_stations.select{ |e| all_stations.count(e) > 1 }.uniq
end

def transit_stations(train_lines, intersections)
  result = {}
  intersections.map do |station| 
    result[station] = train_lines.values.select{|line_stations| line_stations.include? station}.flatten.uniq
  end
  return result
end

def get_num_stops(start_station, end_station, array)
  start_index = array.index(start_station)
  end_index = array.index(end_station) 
  return (end_index - start_index).abs
end

def find_intersection(train_lines, start_station, end_station)
  intersections = all_intersections(train_lines)
  all_transit_stations = transit_stations(train_lines, intersections)
  transit_stations = all_transit_stations.select{|key, value| value.include?(start_station) && value.include?(end_station)}
  if transit_stations.size == 1
    return transit_stations.keys
  else
    transit_station_with_num_stops = {}
    transit_station_with_start_line = {}
    transit_station_with_end_line = {}
    transit_stations.each do |transit_station|
      start_line = train_lines.select{|key, value| value.include?(start_station) && value.include?(transit_station.first)}
      end_line = train_lines.select{|key, value| value.include?(end_station) && value.include?(transit_station.first)}
      first_leg_journey = get_num_stops(start_station, transit_station.first, start_line.values.flatten)
      second_leg_journey = get_num_stops(end_station, transit_station.first, end_line.values.flatten)
      transit_station_with_num_stops[transit_station.first] = total_leg_journey = first_leg_journey + second_leg_journey
      transit_station_with_start_line[transit_station.first] = start_line
      transit_station_with_end_line[transit_station.first] = end_line
    end
    result = []
    result[0] = transit_station_with_num_stops.select{|key, value| value == transit_station_with_num_stops.values.min}.keys.first
    result[1] = transit_station_with_start_line.select{|key| key == result[0]}.values.first
    result[2] = transit_station_with_end_line.select{|key| key == result[0]}.values.first
    return result
  end

end

def print_trip(start_station, end_station, array)
  start_index = array.index(start_station)
  end_index = array.index(end_station) 
  if( start_index < end_index)
    p array.slice(start_index , end_index - start_index + 1).join(' - ')
  else 
    p array.slice(end_index, start_index - end_index + 1).reverse.join(' - ')
  end
end

def plan_trip(train_lines,start_station,end_station)
  start_line = train_lines.select{|key, value| value.include?(start_station)}
  end_line = train_lines.select{|key, value| value.include?(end_station)}
  if (start_line.values.first == end_line.values.first)
    p "Total number of stops is #{get_num_stops(start_station, end_station, end_line.values.first)}"
    print_trip(start_station, end_station, end_line.values.first)
  else
    transit_station = find_intersection(train_lines, start_station, end_station)[0]
    start_line = find_intersection(train_lines, start_station, end_station)[1] || start_line
    end_line = find_intersection(train_lines, start_station, end_station)[2] || end_line
    p "# Line #{start_line.keys.first} - Total number of stops is #{get_num_stops(start_station, transit_station, start_line.values.first)}"
    print_trip(start_station, transit_station, start_line.values.first)
    p "# Line #{end_line.keys.first} - Total number of stops is #{get_num_stops(transit_station, end_station, end_line.values.first)}"
    print_trip(transit_station, end_station, end_line.values.first)
  end
end

p "Welcome to Melbourne PT Planner"
p "==========================="
p "Train Lines"
@train_lines.each do |key, value|
  p "Line - #{key}"
  print "Stations: "
  p value.join(", ")
end
p "==========================="
p "Enter your start station"
start_station = gets.chomp
p "Enter your end station"
end_station = gets.chomp
p "Here is the plan for your trip:"
plan_trip(@train_lines,start_station,end_station)


# plan_trip(@train_lines,start_station,end_station)
# print_trip('Glenferrie', 'Flinders Street', train_lines['Alamein'])
# p get_num_stops('Glenferrie', 'Flinders Street', train_lines['Alamein'])
# p @train_lines.values.flatten.select{ |e| @train_lines.values.flatten.count(e) > 1 }.uniq
# p intersections = all_intersections(@train_lines)
# transit_stations(@train_lines, intersections)
# p find_intersection(@train_lines, start_station, end_station)
