using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BestMedals : MonoBehaviour {
    public GameObject none;
    public GameObject bronze;
    public GameObject silver;
    public GameObject gold;


    void Start()
    {
        int score = PlayerPrefs.GetInt("best");

        if (score >= 10 && score < 20)
        {
            none.SetActive(false);
            bronze.SetActive(true);
            silver.SetActive(false);
            gold.SetActive(false);
        }
        else if (score >= 20 && score < 50)
        {
            none.SetActive(false);
            bronze.SetActive(false);
            silver.SetActive(true);
            gold.SetActive(false);
        }
        else if (score >= 50)
        {
            none.SetActive(false);
            bronze.SetActive(false);
            silver.SetActive(false);
            gold.SetActive(true);
        }
    }
}
