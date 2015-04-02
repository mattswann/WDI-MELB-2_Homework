graph = {
  1 => [2, 3],
  2 => [1, 4, 5],
  3 => [1, 6],
  4 => [2],
  5 => [2],
  6 => [3]
}

1.upto(graph.length) do |key|
  print key ,': '
  graph[key].each do |node_key|
    print node_key, " - "
  end
  print "\n"
end

