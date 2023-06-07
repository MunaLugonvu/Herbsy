import 'package:flutter/material.dart';

import 'bottomNav.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Herbsy',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.green),
        useMaterial3: true,
      ),
      home:  Scaffold(
        appBar: AppBar(
            title: const Text('Herbsy'),
          ),
          body: const BottomNav(),
          
          ),
           
    );
  }
}
