using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Spawner : MonoBehaviour {
    public GameObject enemyPrefab;
    public float secondsSpawn = 1;
    float nextSpawnTime;
    Vector2 screenHalfSizeWorld;
    Vector2 spawnSizeMinMax;

	// Use this for initialization
	void Start () {
        screenHalfSizeWorld = new Vector2(Camera.main.aspect * Camera.main.orthographicSize, Camera.main.orthographicSize);
	}
	
	// Update is called once per frame
	void Update () {
        if (Time.time > nextSpawnTime)
        {
            float spawnSize = Random.Range(spawnSizeMinMax.x, spawnSizeMinMax.y);
            nextSpawnTime = Time.time + secondsSpawn;
            Vector2 spawnPosition = new Vector2(Random.Range(-screenHalfSizeWorld.x + enemyPrefab.transform.localScale.x, screenHalfSizeWorld.x - enemyPrefab.transform.localScale.x), screenHalfSizeWorld.y + enemyPrefab.transform.localScale.x);
            Instantiate(enemyPrefab, spawnPosition, Quaternion.identity);
        } 
	}
}
