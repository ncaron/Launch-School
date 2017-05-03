class OrangeTree

  def initialize
    @age = 0
    @height = 0
    @fruit = 0

    puts "The tree is sprouting!"
  end

  def height
    if @height == 0
      puts "The tree is still sprouting..."
    else
      puts "The tree is #{@height} feet tall."
    end
  end

  def count_oranges
    if @fruit == 0
      puts "The tree doesn't have any fruit."
    elsif @fruit == 1
      puts "The tree has #{@fruit} orange left."
    else
      puts "The tree has #{@fruit} oranges left."
    end
  end

  def pick_orange
    if @fruit == 0
      puts "There is no fruit in the tree, try again next year."
    else
      puts "Mmmmm! Tasty!"
      @fruit -= 1
    end
  end

  def one_year_passes
    if @age == 15
      puts "The tree dies."
      exit
    else
      puts "The tree grew!"
      @age += 1
      @height += 2
    end

    if @age >= 5
      @fruit = @age * 2
    end
  end

end

tree = OrangeTree.new
tree.height
tree.one_year_passes
tree.height
tree.pick_orange
tree.count_oranges
tree.one_year_passes
tree.one_year_passes
tree.height
tree.count_oranges
tree.one_year_passes
tree.one_year_passes
tree.count_oranges
tree.pick_orange
tree.count_oranges
tree.one_year_passes
tree.count_oranges
tree.pick_orange
tree.pick_orange
tree.pick_orange
tree.pick_orange
tree.pick_orange
tree.pick_orange
tree.pick_orange
tree.pick_orange
tree.pick_orange
tree.pick_orange
tree.pick_orange
tree.pick_orange
tree.pick_orange
tree.one_year_passes
tree.count_oranges
tree.pick_orange
tree.one_year_passes
tree.one_year_passes
tree.one_year_passes
tree.one_year_passes
tree.one_year_passes
tree.height
tree.one_year_passes
tree.one_year_passes
tree.one_year_passes
tree.one_year_passes
tree.pick_orange