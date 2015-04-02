def find_line(network, station)
  return network.select do |key, val|
    return val if network[key].include? station
  end
end

def line_stations(start, stop, line)
  start = line.index(start)
  stop  = line.index(stop)
  return line[start..stop] if start < stop
  return line[stop..start] if start >= stop
end

metro = {
  'alamein'     => ["Flinders Street", "Richmond", "East Richmond", "Burnley"],
  'glenWaverly' => ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"],
  'sandringham' => ["Southern Cross", "Richmond", "South Yarra", "Prahan", "Windsor"],
  'frankston'   => ["Richmond", "Glenhuntly", "Ormond", "McKinnon", "Bentleigh", "Patterson", "Moorabbin"],
}

start      = "Flinders Street"
stop       = "Ormond"
start_line = find_line(metro, start)
stop_line  = find_line(metro, stop)

if start_line == stop_line
  journey = line_stations(start, stop, start_line)
else
  journey =  line_stations(start, "Richmond", start_line)
  journey += line_stations(stop, "Richmond", stop_line)
end

print journey, "\n"
