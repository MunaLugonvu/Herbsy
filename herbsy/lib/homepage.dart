import 'package:flutter/material.dart';

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int indexx = 0;
  List category = ['All', 'Food', 'Tea', 'Medicinal'];
  List categoryname = ['all', 'Food', 'Tea', 'Medicinal'];
  List<List<Map<String, String>>> spices = [
      [
      {
        'name': 'Chamomile',
        'image': 'assets/images/tea0.jpg',
      },
      {
        'name': 'Peppermint',
        'image': 'assets/images/tea1.jpg',
      },
      {
        'name': 'Cumin',
        'image': 'assets/images/food0.jpg',
      },
      {
        'name': 'Paprika',
        'image': 'assets/images/food1.jpg',
      },
     
    ],
        [
      {
        'name': 'Cumin',
        'image': 'assets/images/food0.jpg',
      },
      {
        'name': 'Paprika',
        'image': 'assets/images/food1.jpg',
      },
      // Add more food spices with their names and image paths
    ],
    [
      {
        'name': 'Chamomile',
        'image': 'assets/images/tea1.jpg',
      },
      {
        'name': 'Peppermint',
        'image': 'assets/images/tea0.jpg',
      },
     
    ],

     [
      {
        'name': 'Chamomile',
        'image': 'assets/images/tea0.jpg',
      },
      {
        'name': 'Peppermint',
        'image': 'assets/images/tea1.jpg',
      },
      {
        'name': 'Cumin',
        'image': 'assets/images/food0.jpg',
      },
      {
        'name': 'Paprika',
        'image': 'assets/images/food1.jpg',
      },
     
    ],
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        elevation: 0,
        title: const Icon(
          Icons.menu,
          size: 27,
        ),
        automaticallyImplyLeading: false,
      ),
      body: CustomScrollView(
        slivers: [
          const SliverToBoxAdapter(
            child: Padding(
              padding: EdgeInsets.symmetric(horizontal: 15, vertical: 15),
              child: Text(
                'Popular category',
                style: TextStyle(
                  fontSize: 20,
                  color: Colors.black,
                  fontFamily: 'ro',
                ),
              ),
            ),
          ),
          SliverPadding(
            padding: const EdgeInsets.symmetric(horizontal: 15),
            sliver: SliverToBoxAdapter(
              child: Column(
                children: [
                  Container(
                    height: 60,
                    child: ListView.builder(
                      itemCount: category.length,
                      scrollDirection: Axis.horizontal,
                      itemBuilder: (context, index) {
                        return Padding(
                          padding: const EdgeInsets.only(right: 10),
                          child: GestureDetector(
                            onTap: () {
                              setState(() {
                                indexx = index;
                              });
                            },
                            child: Container(
                              margin: EdgeInsets.only(
                                top: 5,
                                bottom: 5,
                                left: index == 0 ? 4 : 0,
                              ),
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(20),
                                color: indexx == index
                                    ? Colors.green
                                    : Colors.white,
                                boxShadow: [
                                  BoxShadow(
                                    color: indexx == index
                                        ? Colors.green
                                        : Colors.transparent,
                                    offset: indexx == index
                                        ? const Offset(1, 1)
                                        : const Offset(0, 0),
                                    blurRadius: indexx == index ? 7 : 0,
                                  )
                                ],
                              ),
                              child: Center(
                                child: Padding(
                                  padding: const EdgeInsets.symmetric(
                                      horizontal: 17),
                                  child: Text(
                                    category[index],
                                    style: TextStyle(
                                      fontSize: 16,
                                      color: indexx == index
                                          ? Colors.white
                                          : Colors.black,
                                      fontFamily: 'ro',
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        );
                      },
                    ),
                  ),
                  const SizedBox(height: 15),
                  const Row(
                    children: [
                      Text(
                        'Popular',
                        style: TextStyle(
                          fontSize: 20,
                          color: Colors.black,
                          fontFamily: 'ro',
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
          SliverPadding(
            padding: const EdgeInsets.symmetric(horizontal: 15, vertical: 20),
            sliver: SliverGrid(
              delegate: SliverChildBuilderDelegate(
                (context, index) {
                  return GestureDetector(
                    onTap: () {
                      Navigator.of(context).push(
                        MaterialPageRoute(
                          builder: (BuildContext context) => Recipe(),
                        ),
                      );
                    },
                    child: Container(
                      decoration: BoxDecoration(
                        color: Colors.white,
                        boxShadow: const [
                          BoxShadow(
                            color: Color.fromARGB(255, 185, 185, 185),
                            offset: Offset(1, 1),
                            blurRadius: 15,
                          ),
                        ],
                        borderRadius: BorderRadius.circular(20),
                      ),
                      child: Column(
                        children: [
                          const SizedBox(height: 10),
                          const Padding(
                            padding: EdgeInsets.only(right: 14),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.end,
                              children: [Icon(Icons.favorite_border)],
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.symmetric(
                              horizontal: 20,
                              vertical: 15,
                            ),
                            child: Container(
                              height: 120,
                              width: 120,
                              decoration: BoxDecoration(
                                image: DecorationImage(
                                  image: AssetImage(
                                    spices[indexx][index]['image']!,
                                  ),
                                  fit: BoxFit.cover,
                                ),
                                borderRadius: BorderRadius.circular(20),
                              ),
                            ),
                          ),
                          const SizedBox(height: 20),
                          Text(
                            spices[indexx][index]['name']!,
                            style: const TextStyle(
                              fontSize: 18,
                              color: Colors.black,
                              fontFamily: 'ro',
                            ),
                          ),
                          const SizedBox(height: 10),
                          const Row(
                            mainAxisAlignment: MainAxisAlignment.spaceAround,
                            children: [
                              Row(
                                children: [
                                  Icon(Icons.star,
                                      color: Colors.blue, size: 15),
                                  Text(
                                    '4.2',
                                    style: TextStyle(
                                      fontSize: 15,
                                      color: Colors.grey,
                                      fontFamily: 'ro',
                                    ),
                                  ),
                                ],
                              )
                            ],
                          )
                        ],
                      ),
                    ),
                  );
                },
                childCount: spices[indexx].length,
              ),
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2,
                mainAxisExtent: 270,
                crossAxisSpacing: 10,
                mainAxisSpacing: 10,
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class Recipe extends StatelessWidget {
  const Recipe({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Recipe Page'),
      ),
      body: const Center(
        child: Text('Recipe'),
      ),
    );
  }
}
