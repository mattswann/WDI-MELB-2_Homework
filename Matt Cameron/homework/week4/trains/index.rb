@metro = {
	:alamein =>	["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
	:glen_waverly => ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"],
	:sandringham => ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
}

def calcStops(start, stop)
	@startLine = checkLine(start)
	@endLine = checkLine(stop)
	@hopOnIndex = @startLine.index(start)
	@hopOffIndex = @endLine.index(stop)

	# If the lines are the same...
	if @startLine == @endLine
		puts "#{(@hopOffIndex - @hopOnIndex).abs} stops"
		getStops(@startStation, @endStation)
	else
		toRichmond = (@startLine.index("Richmond") - @hopOnIndex).abs
		fromRichmond = (@hopOffIndex - @endLine.index("Richmond")).abs
		puts "#{toRichmond + fromRichmond} stops"
		getStops(@startStation, @endStation)
	end
end

def getStops(start, stop)
	if @startLine == @endLine
		if @hopOnIndex < @hopOffIndex
			route = @startLine[@hopOnIndex+1..@hopOffIndex]
		else
			route = @startLine[@hopOffIndex..@hopOnIndex-1].reverse
		end

		puts "Your stops will be: "
		puts route

	else  # Travelling to a different line
		changeAtRichmond = @startLine.index("Richmond")
		boardAtRichmond = @endLine.index("Richmond")

		# stops to Richmond
		if @hopOnIndex < changeAtRichmond
			route1 = @startLine[@hopOnIndex+1..changeAtRichmond]
		else
			route1 = @startLine[changeAtRichmond..@hopOnIndex-1].reverse
		end

		# stops from Richmond
		if boardAtRichmond < @hopOffIndex
			route2 = @endLine[boardAtRichmond+1..@hopOffIndex]
		else
			route2 = @endLine[@hopOffIndex..boardAtRichmond-1].reverse
		end

		puts "Your stops will be: "
		puts route1.concat(route2)
	end
end

def checkLine(station)
		# handle Richmond differently because it is on all lines
	  if (station == "Richmond")
	  		#if starting at Richmond, set the line to the end station's line
	  	if (@startStation == "Richmond")
	  		return checkLine(@endStation)
	  	else  # if ending at Richmond, set the line to the start station's line
	  		return checkLine(@startStation)
	  	end
	 	elsif @metro[:alamein].include?(station)
			return @metro[:alamein]
		elsif @metro[:glen_waverly].include?(station)
				return @metro[:glen_waverly]
		elsif @metro[:sandringham].include?(station)
				return @metro[:sandringham]
	 end
end

puts "Welcome to the Melbourne Public Transport Planner!"
print "What station are you getting on at? "
@startStation = gets.chomp

print "What station are you getting off at? "
@endStation = gets.chomp

calcStops(@startStation, @endStation)