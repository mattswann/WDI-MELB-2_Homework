def get_line_stops(line)
	metro = {
		"Alamein" => ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
		"Glen Waverly" => ["Flagstaff", "Melbourne Central", "Richmond", "Kooyong", "Tooronga"],
		"Sandringham" => ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"],
		"Pakenham" => ["Parliament","Richmond","Hawksburn","Toorak","Armadale","Malvern","Caulfield"]
	}

	return metro[line]
end

def build_journey(line_start,stop_start,line_end,stop_end,i_change)

	if line_start == line_end
	# Start and end stations are on the same line

		# Calculate the trip between the start station and the end station on the line
		line = get_line_stops(line_start)

		return get_journey(line,stop_start,stop_end)

	else
	# Start and end stations are on different lines

		# Retrieve the stops on the trip between the start station and the interchange station on the first line
		line = get_line_stops(line_start)
		journey_1 = get_journey(line,stop_start,i_change)

		# Retrieve the stops on the trip between the interchange station and the end station on the 2nd line
		line = get_line_stops(line_end)
		journey_2 = get_journey(line,i_change,stop_end)
		
		# Prevent the interchange station from being displayed twice
		journey_2.shift;

		return journey_1.concat(journey_2);
	end
	
end

def get_journey (line,start,finish)
# Return array of stops between two stops (inclusive) on the provided line

	idx_start = line.index(start);
	idx_finish = line.index(finish);

	if (idx_start < idx_finish)
		return line[idx_start..idx_finish]
	else
		return line[idx_finish..idx_start].reverse
	end
end

def app
	puts "Origin"
	puts "------"
	print "Line?: "
	line_orig = gets.chomp
	print "Station?: "
	stop_orig = gets.chomp
	puts " "
	puts "Destination"
	puts "-----------"
	print "Line?: "
	line_dest = gets.chomp
	print "Station?: "
	stop_dest = gets.chomp
	
	interchange = "Richmond"

	journey = build_journey(line_orig,stop_orig,line_dest,stop_dest,interchange)
	totalStops = journey.length -  1;

	puts " "
	puts "#{stop_orig}, on the #{line_orig} line, to #{stop_dest}, on the #{line_dest} line, will take you through #{totalStops} stops:"
	puts " "

	journey.each { |stop| puts stop }
	puts " "
end

app